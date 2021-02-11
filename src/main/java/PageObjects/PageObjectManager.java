package PageObjects;

import org.openqa.selenium.WebDriver;

import java.awt.color.ProfileDataException;

public class PageObjectManager {

    private WebDriver driver;
    private Homepage homepage;
    private CartPage cartPage;
    private ProductPage productPage;
    private ZooPointsProgramPage zooPointsProgramPage;
    private static PageObjectManager instance = null;

    private PageObjectManager() {

    }

    public static PageObjectManager getInstance() {
        if (instance == null) {
            synchronized(PageObjectManager.class) {
                if (instance == null) {
                    instance = new PageObjectManager();
                }
            }
        }
        return instance;
    }

    public PageObjectManager setPages(WebDriver drv, Homepage homepage, CartPage cartPage, ProductPage productPage, ZooPointsProgramPage zooPointsProgramPage) {
        this.driver = drv;
        this.homepage = homepage;
        this.cartPage = cartPage;
        this.productPage = productPage;
        this.zooPointsProgramPage = zooPointsProgramPage;
        return this;
    }

    // GETTERS _____
    public Homepage getHomepage(){
        return homepage;
    }

    public CartPage getCartPage(){
        return cartPage;
    }

    public ProductPage getProductPage(){
        return productPage;
    }

    public ZooPointsProgramPage getZooPointsProgramPage(){
        return zooPointsProgramPage;
    }

}
