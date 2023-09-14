class Productpage
{
 addProduct1()
 {
    cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)")
    .click();
 } 
 
 addProduc2()
 {
    cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)")
    .click();
 }

 clickOnCart()
 {
    cy.get("path[fill='currentColor']").click();
 }
}
module.exports=new Productpage();