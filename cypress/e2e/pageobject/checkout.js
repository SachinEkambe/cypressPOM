class Check
{

    clickOnCheckout()
    {
        cy.get(".btn_action.checkout_button").click();
    }
}
module.exports=new Check();