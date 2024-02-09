from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta
from django.utils import timezone

class Site(models.Model):
    siteName = models.CharField(max_length=200, null=False, blank=False)
    WCode = models.CharField(max_length=3, null=False, blank=False)

    def __str__(self):
        return self.siteName

class Status(models.Model):
    site = models.ForeignKey(Site, on_delete=models.SET_NULL, null=True)
    statusDescription = models.CharField(max_length=200, null=False, blank=False)
    statusGroup = models.IntegerField(null=False, blank=False)
    statusText = models.CharField(max_length=200, null=False, blank=False)

    def __str__(self):
        return self.statusText