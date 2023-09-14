describe('right perforamance',()=>{
    it('right click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-paste").should('be.visible')
        cy.get(".context-menu-item context-menu-icon context-menu-icon-quit context-menu-visible").click()
    })
})