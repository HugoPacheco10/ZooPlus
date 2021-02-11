$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddToCartScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "ZooPlus Assessment Test Cases",
  "description": "As a Customer\nI want to add an article or articles to the cart\nIn order to be able to perform a purchase",
  "id": "zooplus-assessment-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9555832890,
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
  "name": "I wait \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I navigate to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the cart with \"1\" rows of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 144166614,
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
  "duration": 1939252097,
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
  "duration": 83660951,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 110502592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "HomepageSteps.i_wait_seconds(int)"
});
formatter.result({
  "duration": 2004361715,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 1934226625,
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
  "duration": 55532043,
  "status": "passed"
});
formatter.after({
  "duration": 169499923,
  "status": "passed"
});
formatter.before({
  "duration": 7890578188,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Adding multiple units of the same article to the cart",
  "description": "",
  "id": "zooplus-assessment-test-cases;adding-multiple-units-of-the-same-article-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@cart"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I select article number \"1\" from the slider",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"2\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I wait \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the cart with \"1\" rows of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 8031516,
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
  "duration": 2103645622,
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
  "duration": 71570708,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 94431153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "HomepageSteps.i_wait_seconds(int)"
});
formatter.result({
  "duration": 2005271993,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 1580974713,
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
  "duration": 60274407,
  "status": "passed"
});
formatter.after({
  "duration": 201255988,
  "status": "passed"
});
formatter.before({
  "duration": 8066746904,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Adding multiple articles to the cart",
  "description": "",
  "id": "zooplus-assessment-test-cases;adding-multiple-articles-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@cart"
    },
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I select article number \"1\" from the slider",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select \"1\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to homepage",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select article number \"3\" from the slider",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select \"2\" units of the lowest size",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I wait \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I navigate to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the cart with \"2\" rows of articles",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.i_am_in_homepage()"
});
formatter.result({
  "duration": 14890373,
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
  "duration": 2009570515,
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
  "duration": 78680485,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 113719992,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_homepage()"
});
formatter.result({
  "duration": 1831526668,
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
  "duration": 1112107696,
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
  "duration": 221753329,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_click_add_to_cart()"
});
formatter.result({
  "duration": 127208002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "HomepageSteps.i_wait_seconds(int)"
});
formatter.result({
  "duration": 2003185909,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_the_cart()"
});
formatter.result({
  "duration": 2003319569,
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
  "duration": 43887747,
  "status": "passed"
});
formatter.after({
  "duration": 171790989,
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
  "duration": 8004246317,
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
  "duration": 13245001,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.i_navigate_to_ZooPoints_Program_Page()"
});
formatter.result({
  "duration": 1309470223,
  "status": "passed"
});
formatter.match({
  "location": "ZooPointsProgramSteps.i_should_see_a_quick_summary_of_the_rules()"
});
formatter.result({
  "duration": 30303947,
  "status": "passed"
});
formatter.after({
  "duration": 153831428,
  "status": "passed"
});
});