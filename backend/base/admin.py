from django.contrib import admin
from .models import Site, Status, Profile, Plant, Department, Shift, Asset, KeyMetric, LossData, MGProduct, HPHourlyCount, HPKPI, Product

class MGProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'product']

class HPKPIAdmin(admin.ModelAdmin):
    list_display = ['id', 'line']

class LossDataAdmin(admin.ModelAdmin):
    list_display = [
        'timeLoss', 'object_id', 'content_type', 'content_object'
    ]

admin.site.register(Site)
admin.site.register(Plant)
admin.site.register(Department)
admin.site.register(Shift)
admin.site.register(Asset)
admin.site.register(KeyMetric)
admin.site.register(Status)
admin.site.register(Profile)
admin.site.register(Product)
admin.site.register(LossData, LossDataAdmin)
admin.site.register(MGProduct, MGProductAdmin)
admin.site.register(HPHourlyCount)
admin.site.register(HPKPI ,HPKPIAdmin)
