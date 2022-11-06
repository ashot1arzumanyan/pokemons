/// <reference types="cypress" />

describe('Routes', () => {
  it('passed', () => {
    cy.visit('http://localhost:3000')
    cy.get('button')
      .first()
      .should('have.text', 'bulbasaur')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/bulbasaur')

    cy.go('back')
      .url()
      .should('eq', 'http://localhost:3000/')
      .get('button > div')
      .should('have.length', 16)
  })
})