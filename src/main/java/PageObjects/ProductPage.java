package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class ProductPage extends BasePage{

    public ProductPage (WebDriver driver) {
        super(driver);
    }

    @FindBy(how = How.CLASS_NAME, using = "icon-quantity-plus")
    private WebElement quantityPlusButton;

    @FindBy(how = How.XPATH, using = "//select[starts-with(@id,'count')]")
    private WebElement quantitySelect;

    @FindBy(how = How.XPATH, using = "//span[contains(@class,'icon-check-circle-o success')]")
    private WebElement circleSuccess;

    @FindBy(how = How.CLASS_NAME, using = "addtocart")
    private WebElement addToCartButton;

    // ACTIONS _____
    public void incrementQuantity() {
        try{
            quantityPlusButton.click();
        }catch (NoSuchElementException exception){
            Select quantity = new Select(quantitySelect);
            quantity.selectByValue("1");
        }
    }

    public void clickAddToCartButton() {

        addToCartButton.click();
        waitForElementToAppear(By.xpath("//*[@id=\"js-product__detail\"]/div[2]/section/div[2]/div[3]/div/form/div/div[2]/span[1]"));
    }
}
