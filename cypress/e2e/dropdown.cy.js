describe('validate Simple dropdown',()=>{
    it('dropdown',()=>{
        cy.visit("https://artoftesting.com/samplesiteforselenium")
       cy.get("#testingDropdown")
       .select('Manual Testing')
    })
})