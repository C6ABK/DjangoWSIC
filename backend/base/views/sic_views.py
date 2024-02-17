from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from base.serializers import KeyMetricSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from ..models import KeyMetric

@api_view(['GET'])
def getKeyMetrics(request):
    keyMetrics = KeyMetric.objects.all()
    serializer = KeyMetricSerializer(keyMetrics, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getKeyMetric(request, pk):
    keyMetrics = KeyMetric.objects.get(id=pk)
    serializer = KeyMetricSerializer(keyMetrics, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateKeyMetric(request, pk):
    data = request.data
    keyMetric = KeyMetric.objects.get(id=pk)

    # Update fields
    keyMetric.totalRTFTimeLoss = data['totalRTFTimeLoss']
    keyMetric.totalSAPDamageUnits = data['totalSAPDamageUnits']
    keyMetric.SAPEfficiency = data['SAPEfficiency']
    keyMetric.SAPYield = data['SAPYield']
    keyMetric.SAPDamage = data['SAPDamage']
    keyMetric.freshnessGaps = data['freshnessGaps']
    keyMetric.warehouseGaps = data['warehouseGaps']
    keyMetric.kronosCheck = data['kronosCheck']

    keyMetric.save()

    serializer = KeyMetricSerializer(keyMetric, many=False)
    return Response(serializer.data)

