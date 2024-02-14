from django.contrib import admin
from .models import Site, Status, Profile, Plant, Department, Shift, Asset, KeyMetric

admin.site.register(Site)
admin.site.register(Plant)
admin.site.register(Department)
admin.site.register(Shift)
admin.site.register(Asset)
admin.site.register(KeyMetric)
admin.site.register(Status)
admin.site.register(Profile)