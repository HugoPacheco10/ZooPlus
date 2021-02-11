package stepDefinitions;

import PageObjects.PageObjectManager;
import PageObjects.ProductPage;
import cucumber.api.java.en.When;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProductSteps {

    private static final Logger log = LoggerFactory.getLogger(ProductSteps.class);

    @When("^I select \"([^\"]*)\" units of the lowest size$")
    public void i_select_units_of_the_lowest_size(String arg1) {
        log.debug("Selecting multiple units of the lowest size...");
        //PageObjectManager.getInstance().getProductPage().clickQuantityPlusButton();
        PageObjectManager.getInstance().getProductPage().incrementQuantity();
    }

    @When("^I click add to cart$")
    public void i_click_add_to_cart() {
        log.debug("Clicking add to cart...");
        PageObjectManager.getInstance().getProductPage().clickAddToCartButton();
    }
}
