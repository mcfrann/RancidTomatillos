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
      .url('http://localhost:3000/718444')
  })

  it('Should display "Error: this does not exist" if internal server error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444',
    {
      statusCode: 500,
      ok: false,
    })
    cy.visit('http://localhost:3000/718444')
      .get('.server-error')
      .should('be.visible')
  });

  it('Should display "Error: Oh no! This movie was not found." if user enters false id to url', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/0000/',
    {
      statusCode: 404,
      ok: false,
    })
    cy.visit('http://localhost:3000/0000/')
      .get('.server-error')
      .should('be.visible')
  });

  it('Should display "Error: Uh oh! Please return home and try again." if other errors', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/718444',
    {
      statusCode: 402,
      ok: false,
    })
    cy.visit('http://localhost:3000/718444')
      .get('.server-error')
      .should('be.visible')
  });

  it('should display movie trailer in popout and click outside trailer to return to movie module', () => {
    cy.visit('http://localhost:3000/718444')
      .get('#watchTrailer')
      .click()
      .get('.trailer-container')
      .should('be.visible')
      .url('http://localhost:3000/trailer')
      .get('.trailer')
      .click()
      .get('.movie-mod')
      .should('be.visible')
      .url('http://localhost:3000/718444')
  })

  it('should be able to return home by clicking arrow', () => {
    cy.visit('http://localhost:3000/718444')
      .get('#backArrow')
      .click()
      .get('.movies-container')
      .should('be.visible')
      .url('http://localhost:3000/')
  })

  it('should be able to return home by site title', () => {
    cy.visit('http://localhost:3000/718444')
      .get('.title-bar')
      .click()
      .get('.movies-container')
      .should('be.visible')
      .url('http://localhost:3000/')
  })
})

