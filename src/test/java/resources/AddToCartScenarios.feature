Feature: ZooPlus Assessment Test Cases
  As a Customer
  I want to add an article or articles to the cart
  In order to be able to perform a purchase

  @cart @regression @smoke
  Scenario: Adding one article to the cart
    Given I am in homepage
    When I select article number "1" from the slider
    And I select "1" units of the lowest size
    And I click add to cart
    And I wait '2' seconds
    And I navigate to the cart
    Then I should see the cart with "1" rows of articles

  @cart @regression
  Scenario: Adding multiple units of the same article to the cart
    Given I am in homepage
    When I select article number "1" from the slider
    And I select "2" units of the lowest size
    And I click add to cart
    And I wait '2' seconds
    And I navigate to the cart
    Then I should see the cart with "1" rows of articles

  @cart @regression
  Scenario: Adding multiple articles to the cart
    Given I am in homepage
    When I select article number "1" from the slider
    And I select "1" units of the lowest size
    And I click add to cart
    And I navigate to homepage
    And I select article number "3" from the slider
    And I select "2" units of the lowest size
    And I click add to cart
    And I wait '2' seconds
    And I navigate to the cart
    Then I should see the cart with "2" rows of articles
