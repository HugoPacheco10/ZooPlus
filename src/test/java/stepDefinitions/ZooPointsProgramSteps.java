package stepDefinitions;

import PageObjects.PageObjectManager;
import cucumber.api.java.en.Then;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ZooPointsProgramSteps {

    private static final Logger log = LoggerFactory.getLogger(ZooPointsProgramSteps.class);

    @Then("^I should see a quick summary of the rules$")
    public void i_should_see_a_quick_summary_of_the_rules() {

        String benefitsContent = PageObjectManager.getInstance().getZooPointsProgramPage().getBenefitsContent();
        log.debug(benefitsContent);

        assert benefitsContent != "" : benefitsContent;

    }

}
