/// <reference types="cypress" />

describe('Rancid Tomatillos App', () => {

  it('has a title/heading', () => {
    cy.visit('http://localhost:3000/')
      .get('.title')
  })

  it('displays all movies at http://localhost:3000/', () => {
    cy.visit('http://localhost:3000/')
      .get('.movies-container')
      .should('be.visible')
  })

  it('should display "Error: Cannot load page. Try again." if 500 status code received', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/')
      .get('.server-error')
      .should('be.visible')
  })

  it('should display "Error: Oh no! Looks like this does not exist." if 404 status code received', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/')
      .get('.server-error')
      .should('be.visible')
  })

  it('should display "Error: Uh oh! Please reload the page." if any error status code is received', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 402,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000/')
      .get('.server-error')
      .should('be.visible')
  })

  it('should be able to click on movie tile', () => {
    cy.visit('http://localhost:3000/')
      .get('#718444').click()
  })

  it('should display single movie module', () => {
    cy.visit('http://localhost:3000/718444')
      .get('.movie-info-container')
      .should('be.visible')
  })

  it('should be able to return home by clicking arrow', () => {
    cy.visit('http://localhost:3000/718444')
      .get('#backArrow')
      .click()
      .get('.movies-container')
      .should('be.visible')
  })

  it('should be able to return home by site title', () => {
    cy.visit('http://localhost:3000/718444')
      .get('.title-bar')
      .click()
      .get('.movies-container')
      .should('be.visible')
  })
})

