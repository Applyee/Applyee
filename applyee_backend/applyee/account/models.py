from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator

class User(AbstractUser):
    username = models.EmailField(unique=True, null=False, max_length=254)
