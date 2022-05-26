from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields= ['id','email','full_name']


class UserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields= ['id','email','full_name','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)


