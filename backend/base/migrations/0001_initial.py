# Generated by Django 4.0 on 2024-02-16 13:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('assetName', models.CharField(max_length=200)),
                ('sapNumber', models.IntegerField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departmentName', models.CharField(max_length=200)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='FinancialCalendar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period', models.IntegerField()),
                ('week', models.IntegerField()),
                ('financialYear', models.CharField(max_length=9)),
                ('calendarDate', models.DateField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='KeyMetric',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productionDate', models.DateField()),
                ('totalRTFTimeLoss', models.IntegerField(blank=True, null=True)),
                ('totalSAPDamageUnits', models.IntegerField(blank=True, null=True)),
                ('SAPEfficiency', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('SAPYield', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('SAPDamage', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('freshnessGaps', models.TimeField(blank=True, null=True)),
                ('warehouseGaps', models.TimeField(blank=True, null=True)),
                ('kronosCheck', models.BooleanField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plantName', models.CharField(max_length=200)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('siteName', models.CharField(max_length=200)),
                ('WCode', models.CharField(max_length=3)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='TeamManagerRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth.user')),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('statusDescription', models.CharField(max_length=200)),
                ('statusGroup', models.IntegerField()),
                ('statusText', models.CharField(max_length=200)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('site', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site')),
            ],
        ),
        migrations.CreateModel(
            name='Shift',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shiftName', models.CharField(max_length=200)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('departmentID', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.department')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.department')),
                ('plant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant')),
                ('shift', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.shift')),
                ('site', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='auth.user')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('productCode', models.CharField(max_length=9)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('plant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant')),
            ],
        ),
        migrations.AddField(
            model_name='plant',
            name='siteID',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site'),
        ),
        migrations.CreateModel(
            name='MGProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mixes', models.IntegerField(blank=True, null=True)),
                ('SAPDoughCount', models.IntegerField(blank=True, null=True)),
                ('pressure3A', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('pressure3B', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('vacuum3A', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('vacuum3B', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('lidSealA', models.BooleanField(blank=True, null=True)),
                ('lidSealB', models.BooleanField(blank=True, null=True)),
                ('dividerLevelSetPoint', models.IntegerField(blank=True, null=True)),
                ('yeastSOR', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('yeastEOR', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgDoughTemp', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('packagingScrapWeight', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('marshallingScrap', models.IntegerField(blank=True, null=True)),
                ('machineScrap', models.IntegerField(blank=True, null=True)),
                ('productionScrap', models.IntegerField(blank=True, null=True)),
                ('RTFStartTime', models.DateTimeField(blank=True, null=True)),
                ('RTFFinishTime', models.DateTimeField(blank=True, null=True)),
                ('gapTime', models.DateTimeField(blank=True, null=True)),
                ('RTFTimeLoss', models.IntegerField(blank=True, null=True)),
                ('SAPEfficiency', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('SAPYield', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('scalingWeight', models.IntegerField(blank=True, null=True)),
                ('standardDiv', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('water3A', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('water3B', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgHeightExOven', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('SAPFinishedGoodsCount', models.IntegerField(blank=True, null=True)),
                ('SORTime', models.DateTimeField(blank=True, null=True)),
                ('EORTime', models.DateTimeField(blank=True, null=True)),
                ('totalSAPDamagePacks', models.IntegerField(blank=True, null=True)),
                ('SAPDamage', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgHeightExCooler', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgDiameterExCooler', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.product')),
            ],
        ),
        migrations.CreateModel(
            name='LossData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField()),
                ('description', models.CharField(max_length=200)),
                ('timeLoss', models.PositiveIntegerField(blank=True, null=True)),
                ('productLoss', models.PositiveIntegerField(blank=True, null=True)),
                ('machineDowntime', models.PositiveIntegerField(blank=True, null=True)),
                ('actions', models.CharField(max_length=200)),
                ('SAPNotification', models.PositiveIntegerField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('asset', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.asset')),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
                ('shift', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.shift')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.status')),
                ('teamleader', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth.user')),
            ],
        ),
        migrations.CreateModel(
            name='LabourControl',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeOfDay', models.IntegerField(blank=True, null=True)),
                ('headCount', models.IntegerField(blank=True, null=True)),
                ('holidays', models.IntegerField(blank=True, null=True)),
                ('absence', models.IntegerField(blank=True, null=True)),
                ('overtime', models.IntegerField(blank=True, null=True)),
                ('agency', models.IntegerField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.department')),
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
            ],
        ),
        migrations.AddField(
            model_name='keymetric',
            name='plant',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant'),
        ),
        migrations.AddField(
            model_name='keymetric',
            name='site',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site'),
        ),
        migrations.CreateModel(
            name='HPKPI',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line', models.IntegerField(blank=True, null=True)),
                ('timeLoss', models.IntegerField(blank=True, null=True)),
                ('accountedDamage', models.IntegerField(blank=True, null=True)),
                ('machineStoppage', models.IntegerField(blank=True, null=True)),
                ('boardBrushUsed', models.BooleanField(blank=True, null=True)),
                ('oilSetPoint', models.IntegerField(blank=True, null=True)),
                ('productWeight', models.IntegerField(blank=True, null=True)),
                ('sealFailures', models.BooleanField(blank=True, null=True)),
                ('MPDetectorWorking', models.BooleanField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
            ],
        ),
        migrations.CreateModel(
            name='HPHourlyCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line', models.IntegerField(blank=True, null=True)),
                ('count', models.IntegerField(blank=True, null=True)),
                ('runTime', models.IntegerField(blank=True, null=True)),
                ('downtime', models.IntegerField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
                ('shift', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.shift')),
            ],
        ),
        migrations.AddField(
            model_name='department',
            name='plantID',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant'),
        ),
        migrations.CreateModel(
            name='CorrectiveAction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('summary', models.CharField(max_length=200)),
                ('action', models.CharField(max_length=200)),
                ('notification', models.IntegerField(blank=True, null=True)),
                ('workOrder', models.IntegerField(blank=True, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('updatedAt', models.DateTimeField(auto_now=True)),
                ('asset', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.asset')),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.department')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='issue_owner', to='auth.user')),
                ('plant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant')),
                ('raisedBy', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='raised_by', to='auth.user')),
                ('site', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.status')),
            ],
        ),
        migrations.AddField(
            model_name='asset',
            name='department',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.department'),
        ),
        migrations.AddField(
            model_name='asset',
            name='plant',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant'),
        ),
        migrations.AddField(
            model_name='asset',
            name='site',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site'),
        ),
    ]
