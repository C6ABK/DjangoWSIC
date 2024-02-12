from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from base.serializers import UserSerializer, UserSerializerWithToken, SiteSerializer
from datetime import datetime 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import make_password
from rest_framework import status
from ..models import Site, Profile

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSites(request):
    sites = Site.objects.all()
    serializer = SiteSerializer(sites, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data

    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']
    
    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)

# AUTHENTICATION ----------------------------------------------------

@api_view(["POST"])
def registerUser(request):
    data = request.data

    try:
        if data['first_name'] == "":
            raise Exception
        if data['last_name'] == "":
            raise Exception
        if data['userSite'] == "":
            raise Exception
        if data['email'] == "":
            raise Exception
        if data['password'] == "":
            raise Exception
    except Exception as e:
        message = {'detail':'Required fields not completed'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)

        site = Site.objects.get(id=data['userSite'])

        profile = Profile.objects.create(
            user = user,
            site = site
        )

        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail':'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

