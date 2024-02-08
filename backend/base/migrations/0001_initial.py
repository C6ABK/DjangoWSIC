# Generated by Django 4.0 on 2024-02-08 12:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('siteName', models.CharField(max_length=200)),
                ('WCode', models.CharField(max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Version',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('version', models.DecimalField(decimal_places=2, max_digits=5)),
                ('comments', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('statusDescription', models.CharField(max_length=200)),
                ('statusGroup', models.IntegerField()),
                ('statusText', models.CharField(max_length=200)),
                ('site', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.site')),
            ],
        ),
        migrations.CreateModel(
            name='Change',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feature', models.CharField(max_length=200)),
                ('comments', models.CharField(blank=True, max_length=200, null=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='auth.user')),
                ('status', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.status')),
                ('versionID', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.version')),
            ],
        ),
    ]
