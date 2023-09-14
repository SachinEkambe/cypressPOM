class Login
{
    setUsername(username)
    {
        cy.get("#user-name").type(username);
    }

    setPassword(password)
    {
        cy.get("#password").type(password);
    }

    clickSubmit()
    {
        cy.get("#login-button").click();
    }
}
module.exports=new Login();