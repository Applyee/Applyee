import pytest


@pytest.mark.django_db
def login_POST_request(client):
    login_data = {
        'username': 'test@email.com',
        'password': 'test password',
    }

    return client.post('/login/', login_data)


@pytest.mark.django_db
def test_login_with_unsigned_user(client):
    response = login_POST_request(client)

    assert response.status_code == 400
    assert 'Unable to log in with provided credentials.' in response.data['non_field_errors']


@pytest.mark.django_db
def test_login_with_signed_user(client):
    signup_data = {
        'username': 'test@email.com',
        'password': 'test password',
    }

    client.post('/users/', signup_data)

    response = login_POST_request(client)

    assert response.status_code == 200
    assert 'token' in response.data.keys()