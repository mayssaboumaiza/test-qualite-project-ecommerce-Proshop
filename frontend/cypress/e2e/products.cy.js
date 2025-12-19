// cypress/e2e/products.cy.js

const slowType = (selector, text, delay = 150) => {
  cy.get(selector, { timeout: 10000 })
    .should('be.visible')
    .clear({ force: true })
    .then(($el) => {
      text.split('').forEach((char) => {
        cy.wrap($el).type(char)
        cy.wait(delay)
      })
    })
}

describe('Créer puis modifier un produit', () => {
  const adminEmail = 'admin@example.com'
  const adminPassword = '123456'

  before(() => {
    cy.request('POST', 'http://localhost:5000/api/users/login', {
      email: adminEmail,
      password: adminPassword,
    }).then((res) => {
      window.localStorage.setItem('userInfo', JSON.stringify(res.body))
    })
  })

  it('Créer puis modifier un produit', () => {
    cy.visit('http://localhost:3000/admin/productlist')

    cy.intercept('POST', '/api/products').as('createProduct')
    cy.contains('Create Product', { timeout: 30000 }).click()
    cy.wait('@createProduct')

    // Attendre que le loader disparaisse si présent
    cy.get('.loader', { timeout: 30000 }).should('not.exist')

    // Remplir les champs texte avec slowType
    slowType('#name', 'Produit Cypress')
    slowType('#price', '99.99')
    slowType('#brand', 'TestBrand')
    slowType('#category', 'TestCategory')
    slowType('#countInStock', '10')
    slowType('#description', 'Description Cypress')

    // Upload d'image depuis fixtures
    cy.get('#image-file', { timeout: 10000 })
      .should('exist')
      .selectFile('cypress/fixtures/produitcypress.webp', { force: true })
      .trigger('change', { force: true }) // déclenche l'événement pour React

    // Soumettre le formulaire
    cy.contains('Update', { timeout: 10000 }).should('be.visible').click()

    // Attendre la redirection ou la disparition du loader
    cy.get('.loader', { timeout: 30000 }).should('not.exist')
    cy.url({ timeout: 10000 }).should('include', '/admin/productlist')

    // Vérification : le produit créé est présent
    cy.visit('http://localhost:3000/admin/productlist/3')
    cy.contains('Produit Cypress', { timeout: 30000 }).should('exist')
  })
})
