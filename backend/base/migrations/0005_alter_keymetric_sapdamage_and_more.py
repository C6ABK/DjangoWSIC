# Generated by Django 4.0 on 2024-02-16 11:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('base', '0004_financialcalendar_asset_updatedat_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymetric',
            name='SAPDamage',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True),
        ),
        migrations.AlterField(
            model_name='keymetric',
            name='SAPEfficiency',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True),
        ),
        migrations.AlterField(
            model_name='keymetric',
            name='SAPYield',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True),
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=9)),
                ('productCode', models.CharField(max_length=9)),
                ('plant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.plant')),
            ],
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
                ('dividerLevelSetPoint', models.IntegerField()),
                ('yeastSOR', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('yeastEOR', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgDoughTemp', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('packagingScrapWeight', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('marshallingScrap', models.IntegerField()),
                ('machineScrap', models.IntegerField()),
                ('productionScrap', models.IntegerField()),
                ('RTFStartTime', models.DateTimeField(blank=True, null=True)),
                ('RTFFinishTime', models.DateTimeField(blank=True, null=True)),
                ('gapTime', models.DateTimeField(blank=True, null=True)),
                ('RTFTimeLoss', models.IntegerField()),
                ('SAPEfficiency', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('SAPYield', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('scalingWeight', models.IntegerField()),
                ('standardDiv', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('water3A', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('water3B', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgHeightExOven', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('SAPFinishedGoodsCount', models.IntegerField()),
                ('SORTime', models.DateTimeField(blank=True, null=True)),
                ('EORTime', models.DateTimeField(blank=True, null=True)),
                ('totalSAPDamagePacks', models.IntegerField()),
                ('SAPDamage', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgHeightExCooler', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('avgDiameterExCooler', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.product')),
            ],
        ),
        migrations.CreateModel(
            name='LossData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeLoss', models.PositiveIntegerField(blank=True, null=True)),
                ('object_id', models.PositiveIntegerField()),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
            ],
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
                ('keyMetric', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.keymetric')),
                ('shift', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.shift')),
            ],
        ),
    ]
