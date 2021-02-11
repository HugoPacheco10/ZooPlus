package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ZooPointsProgramPage  extends BasePage {

    public ZooPointsProgramPage (WebDriver driver) {
        super(driver);
    }

    @FindBy(how = How.XPATH, using = "//*[@id=\"page-content\"]/div[3]/div/main")
    private WebElement pageContainer;

    @FindBy(how = How.CLASS_NAME, using = "loy-bppo-benefitsContainer")
    private WebElement benefitsContent;

    // GETTERS _____
    public String getBenefitsContent(){
        return benefitsContent.getText();
    }
}
