from django.urls import path
from base.views import settings_views as views

urlpatterns = [
    path('sites/', views.getSites, name="get-sites"),
    path('site/<id>', views.getSite, name="get-site"),
    path('userprofile/', views.getProfile, name="get-profile")
]