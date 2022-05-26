from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("User must have an Email")
        if not password:
            raise ValueError("User must have an Password")

        user = self.model(
            email= self.normalize_email(email)
        )
        user.set_password(password)
        user.is_admin = False
        user.is_staff = False
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError("User must have an Email")
        if not password:
            raise ValueError("User must have an Password")

        user = self.model(
            email= self.normalize_email(email)
        )
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractUser):
    full_name = models.CharField(max_length=300)
    email = models.EmailField(max_length=300, unique=True)
    password = models.CharField(max_length=300)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()