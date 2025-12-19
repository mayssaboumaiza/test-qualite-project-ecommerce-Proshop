describe('Supprimer un produit (Admin)', () => {
  before(() => {
    cy.request('POST', 'http://localhost:5000/api/users/login', {
      email: 'admin@example.com',
      password: '123456',
    }).then((res) => {
      localStorage.setItem('userInfo', JSON.stringify(res.body))
    })
  })

  it('Supprimer un produit Sample sur la page 2', () => {
    cy.visit('http://localhost:3000/admin/productlist/2') // naviguer vers la page 2

    // Attendre que la liste soit chargée
    cy.get('.loader', { timeout: 30000 }).should('not.exist')

    // Chercher le produit dans le tableau et cliquer sur le bouton de suppression
    cy.contains('td', 'Sample name')
      .parents('tr')
      .within(() => {
        cy.get('button').last().click()
      })

    // Confirmer la suppression
    cy.on('window:confirm', () => true)

    // Vérifier que le produit n'existe plus dans la page
    cy.contains('td', 'Sample name').should('not.exist')
  })
})
