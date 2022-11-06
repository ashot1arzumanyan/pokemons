/// <reference types="cypress" />

describe('Home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('button > div')
      .should('have.length', 16)

    cy.get('button')
      .contains('Previous')
      .should('be.disabled')
    
    cy.get('button')
      .contains('Next')
      .click()
      .get('button > div')
      .should('have.length', 16)

    cy.get('button')
      .contains('Previous')
      .should('not.be.disabled')

    cy.url()
      .should('include', 'page=2')

    cy.get('input')
      .type('cha')
      .url()
      .should('include', 'page=1')
      .should('include', 'search=cha')

    cy.get('input')
      .clear()
      .url()
      .should('include', 'page=2')
      .should('not.include', 'search=')
  })
})
