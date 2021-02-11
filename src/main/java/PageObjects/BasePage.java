package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.TreeMap;

public class BasePage {

    private static final int TIMEOUT = 15;
    private static final int POLLING = 100;

    protected WebDriver driver;
    private WebDriverWait wait;
    Actions actions;
    TreeMap<String, String> map;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        actions = new Actions(driver);
        wait = new WebDriverWait(driver, TIMEOUT, POLLING);
        PageFactory.initElements(new AjaxElementLocatorFactory(driver, TIMEOUT), this);

        try {
            map = getProperties("./src/main/resources/data.properties");
        }
        catch (IOException e) {
            System.out.println("No Data Properties File Found!");
        }
    }

    // ELEMENTS
    @FindBy(how = How.CLASS_NAME, using = "header-logo")
    private WebElement zooPlusLogo;

    @FindBy(how = How.CLASS_NAME, using = "cart-label")
    private WebElement cartIcon;

    protected void waitForElementToAppear(By locator) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    protected void waitForElementToDisappear(By locator) {
        wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
    }

    protected void waitForTextToDisappear(By locator, String text) {
        wait.until(ExpectedConditions.not(ExpectedConditions.textToBe(locator, text)));
    }

    // ACTIONS _____
    public void clickLogo() {
        actions.moveToElement(zooPlusLogo);
        zooPlusLogo.click();
    }

    public void clickCartIcon() {
        actions.moveToElement(cartIcon);
        cartIcon.click();
    }

    // GETTERS _____

    public static TreeMap<String, String> getProperties(String infile) throws IOException {
        final int lhs = 0;
        final int rhs = 1;

        TreeMap<String, String> map = new TreeMap<String, String>();
        BufferedReader bfr = new BufferedReader(new FileReader(new File(infile)));

        String line;
        while ((line = bfr.readLine()) != null) {
            if (!line.startsWith("#") && !line.isEmpty()) {
                String[] pair = line.trim().split("=");
                map.put(pair[lhs].trim(), pair[rhs].trim());
            }
        }
        bfr.close();
        return(map);
    }

    public TreeMap<String, String> getMap() { return map; }
}
