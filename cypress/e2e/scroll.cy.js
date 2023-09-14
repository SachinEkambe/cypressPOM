describe('scrolling', () => {
    it('scrol', () => {
      cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(1)")
      .scrollIntoView({duration:2000})
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(1)")
      .should('be.visible')
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)")
      .scrollIntoView({duration:2000})
      .should('be.visible')
      cy.get("#footer").scrollIntoView()
    })
  })