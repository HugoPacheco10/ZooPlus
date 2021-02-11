package stepDefinitions;

import PageObjects.PageObjectManager;
import cucumber.api.java.en.Then;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CartSteps {

    private static final Logger log = LoggerFactory.getLogger(CartSteps.class);

    @Then("^I should see the cart with \"([^\"]*)\" rows of articles$")
    public void i_should_see_the_cart_with_rows_of_articles(String amount) {
        log.debug("Verifying amount of rows...");

        int totalProductCount = PageObjectManager.getInstance().getCartPage().getProductCount();

        log.debug("Total Product Count: " + totalProductCount);

        assert PageObjectManager.getInstance().getCartPage().getProductCount() == Integer.parseInt(amount) : totalProductCount;    }
}
