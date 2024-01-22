# from django.db import models
# from django.contrib.auth.models import User
# from datetime import timedelta
# from django.utils import timezone

def tomorrow():
    return timezone.now() + timedelta(days=1)

# class Task(models.Model):
#     user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
#     title = models.CharField(max_length=200, null=False, blank=False)
#     comments = models.CharField(max_length=200, null=True, blank=True)
#     deadline = models.DateField(auto_now_add=False, default=tomorrow)
#     review = models.DateField(auto_now_add=False, default=tomorrow)
#     status = models.BooleanField(null=False, blank=False, default=False)
#     focus = models.BooleanField(null=False, blank=False, default=False)
#     persistent = models.BooleanField(null=False, blank=False, default=False)

#     def __str__(self):
#         return self.title

# class Action(models.Model):
#     taskID = models.ForeignKey(Task, on_delete=models.SET_NULL, null=True)
#     title = models.CharField(max_length=200, null=False, blank=False)
#     comments = models.CharField(max_length=200, null=True, blank=True)
#     status = models.BooleanField(null=False, blank=False, default=False)
#     focus = models.BooleanField(null=False, blank=False, default=False)

#     def __str__(self):
#         return self.title