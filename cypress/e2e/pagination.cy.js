describe('validate pages and read, assert dynamic web table',()=>{
    it('find total number pages',()=>{
        let totalpages;
        cy.visit("https://tablepress.org/demo/")
        cy.get("#tablepress-demo_info").then( (e)=>{
            let mytext=e.text();// Showing 1 to 10 of 200 entries
            totalpages=mytext.substring(mytext.indexOf  ("of")+1, mytext.indexOf("entries")-1);
            cy.log("------total no of pages-------"+totalpages);
          
        })

        
    })

    it('find total number pages',{retries:3},()=>{
        let totalpages=10;
        cy.visit("https://tablepress.org/demo/")
       for(let p=1; p<totalpages; p++)
       {
        if(totalpages>1)
        {
            cy.log('active entri:'+p)
            cy.get("#tablepress-demo_next("+p+")").click();
            cy.wait(2000)
            cy.get("tbody[class='row-hover']>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within( ()=>{
                    cy.get("td:nth-child(2)").then((e)=>{
                    cy.log(e.text())
                    })
                })
            })
        }
       }
          
    })

    it.only('pagination',()=>{
        let totalpages;
        let totalpage=5;
          cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get(".parent.collapsed[href='#collapse-5']").click()
        cy.get('#collapse-5 > :nth-child(1) > a').click()
        cy.get(".col-sm-6.text-end").then( (e)=>{
            let mytext=e.text();
            totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("pages)")-1);
            cy.log("total in table*********::"+totalpages);
            for(let p=1; p<totalpage; p++)
       {
        if(totalpage>1)
        {
            cy.log('active entri:'+p)
            cy.get("div[class='col-sm-6 text-start']>ul.pagination>li:nth-child("+p+")").click();
            cy.wait(2000)
            cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(1)")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within( ()=>{
                    cy.get("td:nth-child(2)").then((e)=>{
                    cy.log(e.text())
                    })
                })
            })
        }
       }
       
        })
    })
})