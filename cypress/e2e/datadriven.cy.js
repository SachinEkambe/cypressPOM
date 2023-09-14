describe('perform data driven using fixture files',()=>{
    it.skip('data driven',()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.fixture('orangeHRM').then( (data)=>{

       cy.get("input[placeholder='Username']").type(data.username)
       cy.get("input[placeholder='Password']").type(data.password)
       cy.get("button[type='submit']").click()
       //varify page is login and PIM is visible or not
       cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text','PIM')
       })
    })
     // let userdata;
    it.skip('data driven',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangeHRM').then( (data)=>{
           userdata=data;
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        //varify page is login and PIM is visible or not
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text','PIM')
        })
     })

     it.skip('data driven using foreach loop',()=>{
        cy.fixture('orangeHRM1').then( (data)=>{
            data.forEach((userdata) => {
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()
                //varify page is login and PIM is visible or not
                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text',userdata.expected)
                cy.get('.oxd-userdropdown-tab').click()
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                }
               

            });
      })
     })

    
     it('data driven using before',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        //varify page is login and PIM is visible or not
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text','PIM')
        })

     })
     let userdata;
     before( ()=>{
        cy.fixture('orangeHRM').then( (data)=>{
            userdata=data;
    })
})

