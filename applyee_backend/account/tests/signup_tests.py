import pytest
from account.models import User


@pytest.mark.django_db
def test_create_user_model():
    User.objects.create(username='test email',
                        password='test password')
    User.objects.get(username='test email')


@pytest.mark.django_db
def test_return_400_response_when_user_get_request(client):
    response = client.get('/users/1/')
    assert response.status_code == 400


@pytest.mark.django_db
def test_return_400_response_when_users_get_request(client):
    response = client.get('/users/')
    assert response.status_code == 400


@pytest.mark.django_db
def test_sign_up_POST_request(client):
    signup_data = {
        'username': 'test@email.com',
        'password': 'test password'
    }
    response = client.post('/users/', signup_data)

    assert response.status_code == 201
    user = User.objects.get(username='test@email.com')


@pytest.mark.django_db
def test_sign_up_fail_with_existent_fields(client):
    User.objects.create(username='test@email.com',
                        password='test password')

    signup_data = {
        'username': 'test@email.com',
        'password': 'test password',
        'phone_number': '01012341234',
    }

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'user with this username already exists.' in response.data['username']


@pytest.mark.django_db
def test_sign_up_fail_with_empty_fields(client):
    signup_data = {}

    response = client.post('/users/', signup_data)

    assert response.status_code == 400
    assert 'This field is required.' in response.data['username']
    assert 'This field is required.' in response.data['password']

