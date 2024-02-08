from django.contrib import admin
from .models import Site, Status, Version, Change

admin.site.register(Site)
admin.site.register(Status)
admin.site.register(Version)
admin.site.register(Change)