describe('File uploading',{retries:2},()=>{
    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Resume.pdf');
        
        cy.get('#file-submit').click();
        cy.wait(4000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
          
        })
    })