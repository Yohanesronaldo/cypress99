describe('add kategori', () => {
    it('add kategori success', () => {
      cy.visit('www.kasirdemo.belajarqa.com')
      cy.get('#email').type("mas123@gmail.com")
      cy.get('#password').type("tokomas")
      cy.get('.chakra-button').click()
      cy.get('[href="/categories"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()
      cy.get('.css-1piskbq').click()
      cy.get('#nama').type("coba1")
      cy.get('#deskripsi').type("harusdicoba")
      cy.get('.chakra-button').click()
  
    })
  })