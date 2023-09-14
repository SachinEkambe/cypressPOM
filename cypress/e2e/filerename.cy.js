describe('File Rename',{retries:2},()=>{
    it('file Rename and upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'Resume.pdf',fileName:'testResume.pdf'});
        
        cy.get('#file-submit').click();
        cy.wait(4000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('testResume.pdf')
          
        })
    })