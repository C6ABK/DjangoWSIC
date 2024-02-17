from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('base.urls.user_urls')),
    path('api/settings/', include('base.urls.settings_urls')),
    path('api/sic/', include('base.urls.sic_urls')),
]
