from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Site, Profile, KeyMetric

class UserSerializer(serializers.ModelSerializer):
    staff = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'staff', 'email']

    def get_id(self, obj):
        return obj.id

    def get_staff(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'staff', 'email', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ['id', 'siteName', 'WCode']

    def get_site(self, obj):
        return obj.id

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'site']

    def get_userSite(self, obj):
        return obj.site

class KeyMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyMetric
        fields = '__all__'

    def get_keyMetric(self, obj):
        return str(self.productionDate)