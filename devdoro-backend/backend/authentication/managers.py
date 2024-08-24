from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.base_user import BaseUserManager

# Create your models here.
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password):
        
        if not email:
            raise ValueError("Email must be set.")
        
        email = self.normalise_email(email)
        user = self.model(email = email)
        user.set_password(password)
        user.save()
        return user

    # def create_superuser(self, email, password):
