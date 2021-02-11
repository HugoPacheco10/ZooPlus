$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddToCartScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "ZooPlus Assessment Test Cases",
  "description": "As a Customer\nI want to add an article or articles to the cart\nIn order to be able to perform a purchase",
  "id": "zooplus-assessment-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9139229244,
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
  "duration": 127934660,
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
  "duration": 1845155551,
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
  "duration": 81245385,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 466342110,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 1947983248,
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
  "duration": 37137064,
  "status": "passed"
});
formatter.after({
  "duration": 189743090,
  "status": "passed"
});
formatter.before({
  "duration": 8603251150,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Adding multiple units of the same article to the cart",
  "description": "",
  "id": "zooplus-assessment-test-cases;adding-multiple-units-of-the-same-article-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@cart"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I select article number \"1\" from the slider",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select \"2\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I navigate to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the cart with \"1\" rows of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 29823381,
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
  "duration": 2101823391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "ProductSteps.i_select_units_of_the_lowest_size(String)"
});
formatter.result({
  "duration": 111582247,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 654771382,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 1774622839,
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
  "duration": 22378494,
  "status": "passed"
});
formatter.after({
  "duration": 193065313,
  "status": "passed"
});
formatter.before({
  "duration": 7954486730,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Adding multiple articles to the cart",
  "description": "",
  "id": "zooplus-assessment-test-cases;adding-multiple-articles-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@cart"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I select article number \"1\" from the slider",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I select \"1\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I navigate to homepage",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select article number \"3\" from the slider",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select \"2\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I navigate to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the cart with \"2\" rows of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 6455198,
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
  "duration": 1995939777,
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
  "duration": 77566617,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 490301643,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_homepage()"
});
formatter.result({
  "duration": 1806579494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "HomepageSteps.i_select_article_number_from_the_slider(String)"
});
formatter.result({
  "duration": 929919021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "ProductSteps.i_select_units_of_the_lowest_size(String)"
});
formatter.result({
  "duration": 368572325,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 531006407,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 1956119857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "CartSteps.i_should_see_the_cart_with_rows_of_articles(String)"
});
formatter.result({
  "duration": 20915051,
  "status": "passed"
});
formatter.after({
  "duration": 177892671,
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
  "duration": 7961489903,
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
  "duration": 44610400,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_ZooPoints_Program_Page()"
});
formatter.result({
  "duration": 1356202821,
  "status": "passed"
});
formatter.match({
  "location": "ZooPointsProgramSteps.i_should_see_a_quick_summary_of_the_rules()"
});
formatter.result({
  "duration": 130685337,
  "status": "passed"
});
formatter.after({
  "duration": 245084468,
  "status": "passed"
});
});