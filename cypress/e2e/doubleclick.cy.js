
describe('double click ',()=>{
    it('validate double click',()=>{
      cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
      cy.frameLoaded("#iframeResult")
      cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
      cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')
      
    })
})