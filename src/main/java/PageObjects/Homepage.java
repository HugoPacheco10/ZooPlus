package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Homepage extends BasePage {

    public Homepage (WebDriver driver) {
        super(driver);
    }

    @FindBy(how = How.CSS, using = "#onetrust-accept-btn-handler")
    private WebElement acceptCookiesButton;

    @FindBy(how = How.CLASS_NAME, using = "product-box__image")
    private WebElement firstSliderItem;

    @FindBy(how = How.CLASS_NAME, using = "lSSlideOuter")
    private WebElement slider;
    

    // ACTIONS _____
    public void clickAcceptCookies() {
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click();", acceptCookiesButton);
    }

    public void navigateToZooPointsProgram() {
        driver.get(this.getMap().get("zoopointsprogram_page"));
    }

    public void clickSliderElementNo(String no){
        int i= Integer.parseInt(no);
        slider.findElement(By.xpath("//*[@id=\"pd__reco__similar\"]/li[" + i + "]/div/a/div[1]/img")).click();
    }

    // GETTERS _____
    public String getCurrentURL(){
        return driver.getCurrentUrl();
    }
}
