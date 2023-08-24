/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://heap.nl/~robbert/select/dist/');
    cy.get('select').select('a_option');
    cy.get('[data-ta="selected"]').should('have.text', 'a_option');
  })
})
