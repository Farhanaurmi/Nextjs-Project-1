from django.contrib import admin
from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', views.registerUser ,name="register"),
]

