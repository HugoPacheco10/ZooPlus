Feature: ZooPlus Assessment Test Cases
  As a Customer
  I want to see a tutorial on ZooPoints
  In order to be able to use the program

  @zoopoints @regression @smoke
  Scenario: Adding one article to the cart
    Given I am in homepage
    When I navigate to ZooPoints Program Page
    Then I should see a quick summary of the rules