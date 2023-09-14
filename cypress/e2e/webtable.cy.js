describe('validate dynamic web table',()=>{
    beforeEach('Login',()=>{
        cy.visit("https://tablepress.org/demo/");

    })

    it('check the number rows and colomns',()=>{
        cy.get("tbody[class='row-hover']>tr")
        .should('have.length',10)
        cy.get("tbody[class='row-hover']>tr>td")
        .should('have.length',70)

    })

    it('check cell data from specific row and cell',()=>{
        cy.get("tr:nth-child(4)>td:first-child")
        .contains('Zena')
         cy.get("tr:nth-child(4)>td:nth-child(3)")
         .contains('19803').end()
 
 
     })

     it('Read all rows and colomns the page',()=>{
       cy.get("tbody[class='row-hover']>tr")
       .each(($row, index, $rows)=>{

        cy.wrap($row).within(()=>{
        cy.get('td').each( ($col, index, $cols)=>{
            cy.log($col.text())

            })
        })
        })
       })

 
 
     })
