from django.db import models
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone

from .managers import PomodoroSessionManager
from authentication.models import CustomUser

# Create your models here.
# def User ():


class PomodoroSession (models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    start_time = models.DateTimeField
    end_time = models.DateTimeField(null=True, blank=True)
    completed = models.BooleanField(default=False)

    objects = PomodoroSessionManager()

    def mark_as_completed(self):
        self.completed = True
        self.end_time = timezone.now()
        self.save()

    def get_duration(self):
        if self.end_time:
            return self.end_time - self.start_time
        return timezone.now() - self.start_time