import Login from "./pageobject/loginpage.js";
import Productpage from "./pageobject/selectproduct.js";
import Check from "./pageobject/checkout.js";
import Information from "./pageobject/informationPage.js";
import Finish from "./pageobject/finishpage.js";
describe('POM',()=>{
    it('Logintest',()=>{
        
        cy.visit("https://www.saucedemo.com/v1/index.html")

        //create reference variable
       
        Login.setUsername("standard_user");
        Login.setPassword("secret_sauce");
        Login.clickSubmit();

        Productpage.addProduct1();
        Productpage.addProduc2();
        Productpage.clickOnCart();

        Check.clickOnCheckout();

        Information.enterFname("pavan");
        Information.enterLname("ekambe");
        Information.enterpostA("431741");
        Information.clickOncontinue();

        Finish.clickOnFinish();
        Finish.varifyText();
    })
})