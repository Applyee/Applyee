from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator


class User(AbstractUser):
    username = models.EmailField(unique=True, null=False, max_length=254)


class Application(models.Model):
    maker = models.ForeignKey('User', null=False, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.TextField(default='안녕하세요 :D 지원해주셔서 감사합니다.')
    link_url = models.URLField()
    start_date = models.DateField()
    due_date = models.DateField()
    has_image_form = models.BooleanField(default=True)
    has_attached_file_form = models.BooleanField(default=True)


class Mail(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    application = models.ForeignKey('Application', null=False, on_delete=models.CASCADE())


class Applicant(models.Model):
    application = models.ForeignKey('Application', null=False, on_delete=models.CASCADE())
    image = models.ImageField()
    file = models.FileField()
    avg_rate = models.IntegerField()
    state = models.CharField(max_length=100)
    apply_time = models.DateField()


class Comment(models.Model):
    application = models.ForeignKey('Application', null=False, on_delete=models.CASCADE())
    user = models.ForeignKey('User', null=False, on_delete=models.CASCADE())
    comment = models.TextField()
    rate = models.IntegerField()


class Question(models.Model):
    TYPE_CHOICES = (
        ('S', 'Short'),
        ('L', 'Long'),
    )

    question = models.CharField(max_length=200)
    example_answer = models.TextField()
    priority = models.IntegerField()
    type = models.CharField(max_length=1, choices=TYPE_CHOICES)
    application = models.ForeignKey('Application', null=False, on_delete=models.CASCADE())


class Answer(models.Model):
    question = models.ForeignKey('Question', null=False, on_delete=models.CASCADE())
    applicant = models.ForeignKey('Applicant', null=False, on_delete=models.CASCADE())
    answer = models.TextField()
    