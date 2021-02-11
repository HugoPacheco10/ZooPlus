package stepDefinitions;

import PageObjects.PageObjectManager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HomepageSteps {

    private static final Logger log = LoggerFactory.getLogger(HomepageSteps.class);

    @Given("^I am in homepage$")
    public void i_am_in_homepage() {
        log.debug("I am in homepage!...");
        assert PageObjectManager.getInstance().getHomepage().getCurrentURL() != null : "https://www.zooplus.es/";
    }

    @When("^I select article number \"([^\"]*)\" from the slider$")
    public void i_select_article_number_from_the_slider(String no) {
        log.debug("Selecting article number " + no + " from the cart...");
        PageObjectManager.getInstance().getHomepage().clickSliderElementNo(no);
    }

    @When("^I navigate to ZooPoints Program Page$")
    public void i_navigate_to_ZooPoints_Program_Page() {
        log.debug("Navigating to ZooPoints Program Page...");
        PageObjectManager.getInstance().getHomepage().navigateToZooPointsProgram();
    }

    @When("^I navigate to the cart$")
    public void i_navigate_to_the_cart() {
        log.debug("Navigating to cart...");
        PageObjectManager.getInstance().getHomepage().clickCartIcon();
    }

    @When("^I navigate to homepage$")
    public void i_navigate_to_homepage() {
        log.debug("Navigating to homepage...");
        PageObjectManager.getInstance().getHomepage().clickLogo();
    }

    @When("^I wait '(\\d+)' seconds$")
    public void i_wait_seconds(int arg1) throws Throwable {
        Thread.sleep(arg1*1000);
    }
}
