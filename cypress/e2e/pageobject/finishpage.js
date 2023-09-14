class Finish
{
    clickOnFinish()
    {
        cy.get(".btn_action.cart_button").click();
    }

    varifyText()
    {
        cy.get(".complete-header")
        .should('have.text','THANK YOU FOR YOUR ORDER');
    }
}

module.exports=new Finish();