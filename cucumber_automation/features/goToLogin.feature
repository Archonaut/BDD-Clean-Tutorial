# Text nicht statisch machen, sondern auch mit RegEx/Parametern arbeiten. Siehe auch: https://agileforall.com/just-enough-regular-expressions-for-cucumber
# Generell einheitliche Benamung: mit Unterstrich oder mit klein/Großschreibung. Also z.B. page_objects oder pageObjects

Feature: Login successfully

    Successfully log in, starting from the Main Page

    Scenario: Not already logged in
    Given I am on the main page
    When I click on the button for the Login-Page
    When I get to the Login-Page
    When I scroll down
    When I fill in my username
    When I type in the correct password and confirm via Enter    
    Then I am greeted
    Then I go to the profile
    Then I check if the email exists