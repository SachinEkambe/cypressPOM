describe('validate checkbox',()=>{
    it('checkbox',()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get("input[value='Automation']").check()
        .should('have.checked')
        .should('have.be.disable')
        cy.get("input[value='Automation']").uncheck()
        .should('have.not.be.checked')
        .should('be.visible')
    })
})