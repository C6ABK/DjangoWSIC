from django.urls import path
from base.views import settings_views as views

urlpatterns = [
    path('sites/', views.getSites, name="get-sites")
]