describe('confirm alert',()=>{
    it('confirm',()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get("button[onclick='generateConfirmBox()']").click()
        cy.on('window:confirm',()=>false)
        cy.get("#demo").contains('You pressed Cancel!')
    })
})