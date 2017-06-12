import os

from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view

from account.models import User
from account.serializer import UserSerializer

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import json
import re


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        return Response(status=status.HTTP_400_BAD_REQUEST)


def send_mail_with_contents(email, title, contents):

    email_regex = re.compile("(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
    match_result = email_regex.match(email)
    if match_result is False:
        return Response({"message": "Invalid Mail Form"}, status=status.HTTP_400_BAD_REQUEST)

    from_addr = os.environ['APPLYEE_MAIL_ADDRESS']
    to_addr = email

    server = smtplib.SMTP('smtp.gmail.com:587')
    server.starttls()

    server.login(from_addr, os.environ['APPLYEE_MAIL_PASSWORD'])

    body = MIMEMultipart()
    body['subject'] = title
    body['From'] = from_addr
    body['To'] = to_addr

    msg = MIMEText(contents, 'plain')
    body.attach(msg)

    server.sendmail(from_addr=from_addr,
                    to_addrs=[to_addr],  # list, str 둘 다 가능
                    msg=body.as_string())

    server.quit()

    return Response({"message": "Success"})


@api_view(['POST'])
def send_email_to_applier(request):
    if request.method == 'POST':
        return send_mail_with_contents(request.POST['email'], request.POST['title'], request.POST['contents'])
