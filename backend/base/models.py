from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta
from django.utils import timezone
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Site(models.Model):
    siteName = models.CharField(max_length=200, null=False, blank=False)
    WCode = models.CharField(max_length=3, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.siteName

class Plant(models.Model):
    siteID = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plantName = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.siteID) + " - " + str(self.plantName)

class Department(models.Model):
    plantID = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    departmentName = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.plantID) + " - " + str(self.departmentName)

class Shift(models.Model):
    departmentID = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    shiftName = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.departmentID) + " - " + str(self.shiftName) + " shift"

class Asset(models.Model):
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    assetName = models.CharField(max_length=200, null=False, blank=False)
    sapNumber = models.IntegerField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.assetName

class Status(models.Model):
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    statusDescription = models.CharField(max_length=200, null=False, blank=False)
    statusGroup = models.IntegerField(null=False, blank=False)
    statusText = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.statusText

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    shift = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name

class KeyMetric(models.Model):
    productionDate = models.DateField(null=False, blank=False)
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    totalRTFTimeLoss = models.IntegerField(null=True, blank=True)
    totalSAPDamageUnits = models.IntegerField(null=True, blank=True)
    SAPEfficiency = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    SAPYield = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    SAPDamage = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    freshnessGaps = models.TimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    warehouseGaps = models.TimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    kronosCheck = models.BooleanField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id) + " - " + str(self.productionDate) + " - (" + str(self.plant) + ")"

# Just hard code the time of day values into the frontend dropdown
class LabourControl(models.Model):
    keyMetric = models.ForeignKey(KeyMetric, on_delete=models.SET_NULL, null=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    timeOfDay = models.IntegerField(null=True, blank=True)
    headCount = models.IntegerField(null=True, blank=True)
    holidays = models.IntegerField(null=True, blank=True)
    absence = models.IntegerField(null=True, blank=True)
    overtime = models.IntegerField(null=True, blank=True)
    agency = models.IntegerField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.keyMetric) + " - (" + str(department) + ")"

class CorrectiveAction(models.Model):
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    raisedBy = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='raised_by')
    asset = models.ForeignKey(Asset, on_delete=models.SET_NULL, null=True)
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='issue_owner')
    summary = models.CharField(max_length=200, null=False, blank=False)
    action = models.CharField(max_length=200, null=False, blank=False)
    notification = models.IntegerField(null=True, blank=True)
    workOrder = models.IntegerField(null=True, blank=True)
    status = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.summary)

# Financial Year field to act as a name
class FinancialCalendar(models.Model):
    period = models.IntegerField(null=False, blank=False)
    week = models.IntegerField(null=False, blank=False)
    financialYear = models.CharField(max_length=9, null=False, blank=False)
    calendarDate = models.DateField(null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.financialYear)

class TeamManagerRecord(models.Model):
    keyMetric = models.ForeignKey(KeyMetric, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.user)

class Product(models.Model):
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=False, blank=False)
    productCode = models.CharField(max_length=9, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name)

class HPHourlyCount(models.Model):
    keyMetric = models.ForeignKey(KeyMetric, on_delete=models.SET_NULL, null=True)
    shift = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True)
    line = models.IntegerField(null=True, blank=True)
    count = models.IntegerField(null=True, blank=True)
    runTime = models.IntegerField(null=True, blank=True)
    downtime = models.IntegerField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.keyMetric)

class HPKPI(models.Model):
    keyMetric = models.ForeignKey(KeyMetric, on_delete=models.SET_NULL, null=True)
    line = models.IntegerField(null=True, blank=True)
    timeLoss = models.IntegerField(null=True, blank=True)
    accountedDamage = models.IntegerField(null=True, blank=True)
    machineStoppage = models.IntegerField(null=True, blank=True)
    boardBrushUsed = models.BooleanField(null=True, blank=True)
    oilSetPoint = models.IntegerField(null=True, blank=True)
    productWeight = models.IntegerField(null=True, blank=True)
    sealFailures = models.BooleanField(null=True, blank=True)
    MPDetectorWorking = models.BooleanField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.keyMetric)

class MGProduct(models.Model):
    keyMetric = models.ForeignKey(KeyMetric, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    mixes = models.IntegerField(null=True, blank=True)
    SAPDoughCount = models.IntegerField(null=True, blank=True)
    pressure3A =  models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    pressure3B =  models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    vacuum3A =  models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    vacuum3B =  models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    lidSealA = models.BooleanField(null=True, blank=True)
    lidSealB = models.BooleanField(null=True, blank=True)
    dividerLevelSetPoint = models.IntegerField(null=True, blank=True)
    yeastSOR = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    yeastEOR = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    avgDoughTemp = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    packagingScrapWeight = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    marshallingScrap = models.IntegerField(null=True, blank=True)
    machineScrap = models.IntegerField(null=True, blank=True)
    productionScrap = models.IntegerField(null=True, blank=True)
    RTFStartTime = models.DateTimeField(null=True, blank=True)
    RTFFinishTime = models.DateTimeField(null=True, blank=True)
    gapTime = models.DateTimeField(null=True, blank=True)
    RTFTimeLoss = models.IntegerField(null=True, blank=True)
    SAPEfficiency = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    SAPYield = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    scalingWeight = models.IntegerField(null=True, blank=True)
    standardDiv = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    water3A = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    water3B = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    avgHeightExOven = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    SAPFinishedGoodsCount = models.IntegerField(null=True, blank=True)
    SORTime = models.DateTimeField(null=True, blank=True)
    EORTime = models.DateTimeField(null=True, blank=True)
    totalSAPDamagePacks = models.IntegerField(null=True, blank=True)
    SAPDamage = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    avgHeightExCooler = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    avgDiameterExCooler = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.keyMetric)

class LossData(models.Model):
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField(null=False, blank=False)
    content_object = GenericForeignKey('content_type', 'object_id')
    asset = models.ForeignKey(Asset, on_delete=models.SET_NULL, null=True)
    description = models.CharField(max_length=200, null=False, blank=False)
    shift = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True)
    timeLoss = models.PositiveIntegerField(null=True, blank=True)
    productLoss = models.PositiveIntegerField(null=True, blank=True)
    machineDowntime = models.PositiveIntegerField(null=True, blank=True)
    actions = models.CharField(max_length=200, null=False, blank=False)
    status = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True)
    SAPNotification = models.PositiveIntegerField(null=True, blank=True)
    teamleader = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.description)