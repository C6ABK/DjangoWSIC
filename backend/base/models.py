from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta
from django.utils import timezone

class Site(models.Model):
    siteName = models.CharField(max_length=200, null=False, blank=False)
    WCode = models.CharField(max_length=3, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.siteName

class Plant(models.Model):
    siteID = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plantName = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.plantName

class Department(models.Model):
    plantID = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    departmentName = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.departmentName

class Shift(models.Model):
    departmentID = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    shiftName = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.shiftName

class Asset(models.Model):
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True)
    assetName = models.CharField(max_length=200, null=False, blank=False)
    sapNumber = models.IntegerField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.assetName

class Status(models.Model):
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    statusDescription = models.CharField(max_length=200, null=False, blank=False)
    statusGroup = models.IntegerField(null=False, blank=False)
    statusText = models.CharField(max_length=200, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.statusText

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name

class KeyMetric(models.Model):
    productionDate = models.DateField(null=False, blank=False)
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    plant = models.ForeignKey(Plant, on_delete=models.SET_NULL, null=True)
    totalRTFTimeLoss = models.IntegerField(null=True, blank=True)
    totalSAPDamageUnits = models.IntegerField(null=True, blank=True)
    SAPEfficiency = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    SAPYield = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    SAPDamage = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    freshnessGaps = models.TimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    warehouseGaps = models.TimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    kronosCheck = models.BooleanField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.productionDate) + " - (" + str(self.plant) + ")"