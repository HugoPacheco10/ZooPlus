package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/resources",
        glue = "stepDefinitions",
        plugin = {
                "pretty",
                "json:target/cucumber-reports/cucumber-report.json",
                "html:target/cucumber-reports/screenshot.jpg"
        },
        monochrome = true
)
public class TestRunner {

}