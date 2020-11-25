# Text nicht statisch machen, sondern auch mit RegEx/Parametern arbeiten. Siehe auch: https://agileforall.com/just-enough-regular-expressions-for-cucumber

Feature: Login successfully

    Successfully log in, starting from the Main Page

    Scenario: Not already logged in
    #Given the user is on the landing page
    Given I am on the main page
    #When I click on the button for the Login-Page               
    #Then I get to the Login-Page                                
    When I scroll down                                          
    #And I fill in my username                                   
    #And I type in the correct password and confirm via Enter    
    Then I am greeted                                           
    # When I go to the profile                                    
    # Then I check if the email exists                            
    
# Given the registered user is on the main page
# When he moves on the the [a]-page
# Then he is on the [a]-page
# When he scrolls down to see the input fields
# And types in his username
# And types in his correct password and confirms the input via Enter
# Then he is greeted
# When he goes to his profile
# Then he checks if there is an [b]


#Scenario: The registered user logs in
#  Given Martin is on the login-page
#  When martin logs in with his valid credentials
#  Then he sees his profile page