from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator

class User(AbstractUser):
    username = models.EmailField(unique=True, null=False, max_length=254)
    phone_regex = RegexValidator(regex='^\d{11}$', message='Phone length has to be 11 & Only number')
    phone_number = models.CharField(max_length=11, validators=[phone_regex])
