import pytest
from fixture_tests import browser, BASE_URL


def test_login(browser):
    browser.get(BASE_URL + '/login')

    browser.find_element_by_xpath("//input[@name='username']").send_keys('testman@email.com')
    browser.find_element_by_xpath("//input[@name='password']").send_keys('1234')

    browser.find_element_by_xpath("//button[text()='로그인']").click()

