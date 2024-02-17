from django.urls import path
from base.views import sic_views as views

urlpatterns = [
    path('keymetrics/', views.getKeyMetrics, name="get-key-metrics"),
    path('keymetric/<str:pk>', views.getKeyMetric, name="get-key-metric"),
    path('keymetric/<str:pk>/update/', views.updateKeyMetric, name="update-key-metric"),
]