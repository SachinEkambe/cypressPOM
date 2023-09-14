describe('validate radiobutton',()=>{
    it('radio',()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get("#male").check()
        .should('have.checked')
        .should('have.be.visible')
        cy.get("#male").uncheck()
    })
})