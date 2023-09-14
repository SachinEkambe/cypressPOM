class Information
{
    enterFname(fname)
    {
        cy.get("#first-name").type(fname)
    }

    enterLname(lname)
    {
        cy.get("#last-name").type(lname)
    }

    enterpostA(post)
    {
        cy.get("#postal-code").type(post)
    }

    clickOncontinue()
    {
        cy.get("input[value='CONTINUE']").click();
    }
}
module.exports=new Information();