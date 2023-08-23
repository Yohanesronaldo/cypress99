describe('add kategori', () => {
    it('add kategori success', () => {
      cy.visit('www.kasirdemo.belajarqa.com')
      cy.get('#email').type("mas123@gmail.com")
      cy.get('#password').type("tokomas")
      cy.get('.chakra-button').click()
      cy.get('[href="/users"] > .css-ewi1jp').click()
      cy.get('.chakra-button').click()
      cy.get('#nama').type("yoyo")
      cy.get('#email').type("yoyo@gmail.com")
      cy.get('#password').type("yoyo")
      cy.get('.css-l5lnz6').click()
  
    })
  })