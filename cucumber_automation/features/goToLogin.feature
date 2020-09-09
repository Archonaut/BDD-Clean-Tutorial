Feature: Go to Login

    Go to the Login-Page from the HomePage

    Scenario: Not already on the Login-Page
    Given I am on the main page
    When I click on the login button
    Then I should get to the Login-Page