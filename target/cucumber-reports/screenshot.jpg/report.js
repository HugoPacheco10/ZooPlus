$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddToCartScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "ZooPlus Assessment Test Cases",
  "description": "As a Customer\nI want to add an article or articles to the cart\nIn order to be able to perform a purchase",
  "id": "zooplus-assessment-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9888935494,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Adding one article to the cart",
  "description": "",
  "id": "zooplus-assessment-test-cases;adding-one-article-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@cart"
    },
    {
      "line": 6,
      "name": "@regression"
    },
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select article number \"1\" from the slider",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select \"1\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I navigate to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the cart with \"1\" rows of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 182657635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "HomepageSteps.i_select_article_number_from_the_slider(String)"
});
formatter.result({
  "duration": 1937221462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "ProductSteps.i_select_units_of_the_lowest_size(String)"
});
formatter.result({
  "duration": 76744048,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 583567328,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 1727954668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "CartSteps.i_should_see_the_cart_with_rows_of_articles(String)"
});
formatter.result({
  "duration": 27807444,
  "status": "passed"
});
formatter.after({
  "duration": 223586427,
  "status": "passed"
});
formatter.uri("ZooPointsProgramScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "ZooPlus Assessment Test Cases",
  "description": "As a Customer\nI want to see a tutorial on ZooPoints\nIn order to be able to use the program",
  "id": "zooplus-assessment-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8039961993,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Adding one article to the cart",
  "description": "",
  "id": "zooplus-assessment-test-cases;adding-one-article-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@zoopoints"
    },
    {
      "line": 6,
      "name": "@regression"
    },
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ZooPoints Program Page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see a quick summary of the rules",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 14926201,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_ZooPoints_Program_Page()"
});
formatter.result({
  "duration": 1427250345,
  "status": "passed"
});
formatter.match({
  "location": "ZooPointsProgramSteps.i_should_see_a_quick_summary_of_the_rules()"
});
formatter.result({
  "duration": 182485411,
  "status": "passed"
});
formatter.after({
  "duration": 186548987,
  "status": "passed"
});
});