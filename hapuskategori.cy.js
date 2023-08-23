describe('add kategori', () => {
  it('add kategori success', () => {
    cy.visit('www.kasirdemo.belajarqa.com')
    cy.get('#email').type("mas123@gmail.com")
    cy.get('#password').type("tokomas")
    cy.get('.chakra-button').click()
    cy.get('[href="/categories"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()
    cy.get('#menu-button-19').click()
    cy.get('#menu-list-19-menuitem-17').click()
    cy.get('.css-n45e6f').click()

  })
})