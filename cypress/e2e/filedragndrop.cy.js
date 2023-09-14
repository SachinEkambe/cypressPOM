describe('File drag and drop',{retries:2},()=>{
    it('file drag drop upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
       cy.get("#drag-drop-upload").attachFile('Resume.pdf',{subjectType:'drag-n-drop'})
       cy.wait(4000)
       cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
       .contains('Resume.pdf')
          
        })
    })