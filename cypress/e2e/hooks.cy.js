describe('mytest suite',{retries:2},()=>{
    it('search',()=>{
       cy.log("***** search*****")
          
        })

        it('Advance search',()=>{
            cy.log("***** Advance search*****")
               
             })

         it('Listing products',()=>{
         cy.log("***** listing products*****")
                   
            }) 
            
        before(()=>{
        cy.log("***** lunch application*****")
                   
         })  
         
         after(()=>{
            cy.log("***** close application*****")
                       
             })  

          beforeEach(()=>{
             cy.log("*****  login*****")
                           
        })  
        afterEach(()=>{
            cy.log("*****  logout*****")
                       
         })  
    })