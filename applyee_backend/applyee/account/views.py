from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response

from account.models import User
from account.serializer import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        return Response(status=status.HTTP_400_BAD_REQUEST)
