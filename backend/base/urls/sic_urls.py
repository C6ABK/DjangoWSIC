from django.urls import path
from base.views import sic_views as views

urlpatterns = [
    path('keymetrics/', views.getKeyMetrics, name="get-key-metrics")
]