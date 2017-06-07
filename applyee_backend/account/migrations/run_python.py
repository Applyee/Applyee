from __future__ import unicode_literals
from django.db import migrations, models
from django.contrib.auth.hashers import make_password


def forwards_func(apps, schema_editor):
    User = apps.get_model("account", "User")

    hashed_password = make_password("1234")
    User.objects.create(username="testman@email.com", password=hashed_password)


def reverse_func(apps, schema_editor):
    User = apps.get_model("account", "User")
    db_alias = schema_editor.connection.alias


class Migration(migrations.Migration):
    dependencies = [
        ('account', '0002_remove_user_phone_number'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]
