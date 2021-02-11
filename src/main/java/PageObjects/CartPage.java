package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CartPage extends BasePage{

    public CartPage (WebDriver driver) {
        super(driver);
    }

    @FindBy(how = How.XPATH, using = "//span[@class='total__price v3-text--right']")
    private WebElement totalPrice;

    @FindBy(how = How.CLASS_NAME, using = "cart__table__row")
    private WebElement cartTableRow;

    // GETTERS _____
    public int getProductCount() {
        return driver.findElements(By.className("cart__table__row")).size();
    }
}
