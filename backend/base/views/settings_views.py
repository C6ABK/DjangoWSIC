from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from base.serializers import SiteSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from ..models import Site

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSites(request):
    sites = Site.objects.all()
    serializer = SiteSerializer(sites, many=True)
    return Response(serializer.data)
