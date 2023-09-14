
describe('validate draag drop',()=>{
    it('draag drop',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.wait(3000)
        cy.get('#box6').drag('#box106',{force:true})
    })
})