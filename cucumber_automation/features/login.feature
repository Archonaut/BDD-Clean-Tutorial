# Text nicht statisch machen, sondern auch mit RegEx/Parametern arbeiten. Siehe auch: https://agileforall.com/just-enough-regular-expressions-for-cucumber

Feature: Login successfully

    Successfully log in, starting from the Main Page

    Scenario: Not already logged in
    Given I am on the landing page
    When I enter my correct credentials                                          
    Then I am on my profile page

#Scenario: The registered user logs in
#  Given Martin is on the login-page
#  When martin logs in with his valid credentials
#  Then he sees his profile page