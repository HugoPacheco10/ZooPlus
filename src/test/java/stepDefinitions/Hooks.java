package stepDefinitions;

import PageObjects.*;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.net.MalformedURLException;

public class Hooks {

    public static WebDriver driver;
    private static final Logger log = LoggerFactory.getLogger(Hooks.class);
    private Homepage homepage;

    @Before
    public void openBrowser() throws MalformedURLException, InstantiationException, IllegalAccessException {
        log.debug("Before Scenario!");

        String browser = System.getProperty("BROWSER");
        if(browser==null)
        {
            browser = System.getenv("BROWSER");
            if(browser==null) { browser= "chrome"; }
        }
        Class<? extends WebDriver> driverClass;
        switch (browser)
        {
            case "chrome":
                driverClass = ChromeDriver.class;
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                break;
            default:
                driverClass = FirefoxDriver.class;
                WebDriverManager.getInstance(driverClass).setup();
                driver = driverClass.newInstance();
                break;
        }

        homepage = new Homepage(driver);
        PageObjectManager.getInstance().setPages(driver, homepage, new CartPage(driver), new ProductPage(driver), new ZooPointsProgramPage(driver));

        log.debug("Opening Browser...." + browser);

        driver.get(homepage.getMap().get("homepage"));
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        homepage.clickAcceptCookies();

    }

    @After
    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    public void embedScreenshot(Scenario scenario) {
        log.debug("After Scenario.");
        if(scenario.isFailed()) {
            try {
                scenario.write("Current Page URL is " + driver.getCurrentUrl());
                byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }
        }
        //else {
        //    log.debug("Closing Browser.");
        //    //driver.close();
        //    log.debug("Browser Closed.");
        //}

        log.debug("Closing Browser.");
        driver.close();
        log.debug("Browser Closed.");
    }
}
