import pytest
from account.models import User
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from fixture_tests import browser, BASE_URL


def test_sign_up(browser):

    browser.get(BASE_URL + '/signup')

    browser.find_element_by_xpath("//input[@name='username']").send_keys('test@test.com')
    browser.find_element_by_xpath("//input[@name='password']").send_keys('1234')
    browser.find_element_by_xpath("//input[@name='password_check']").send_keys('1234')

    browser.find_element_by_xpath("//button[text()='시작하기']").click()

    verfy_modal = WebDriverWait(browser, 15).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='ui page modals dimmer transition visible active']"))
    )
    assert '회원가입이 완료되었습니다.' in verfy_modal.text


def test_sign_up_different_password(browser):
    browser.get(BASE_URL + '/signup')

    browser.find_element_by_xpath("//input[@name='username']").send_keys('testman@email.com')
    browser.find_element_by_xpath("//input[@name='password']").send_keys('1234')
    browser.find_element_by_xpath("//input[@name='password_check']").send_keys('1234')

    browser.find_element_by_xpath("//button[text()='시작하기']").click()

    verfy_modal = WebDriverWait(browser, 15).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='ui page modals dimmer transition visible active']"))
    )

    assert "중복된 아이디입니다." in verfy_modal.text
