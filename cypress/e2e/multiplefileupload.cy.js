describe('multiple File uploading',{retries:2},()=>{
    it('multiple file upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['Resume.pdf','Sunil Patil.pdf']);
    
        })
    })