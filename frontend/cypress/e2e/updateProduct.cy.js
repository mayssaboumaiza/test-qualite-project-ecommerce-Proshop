// cypress/e2e/updateProduct.cy.js
describe('Modifier un produit existant (Admin)', () => {
  const productId = '693b6156d5c32c30e0696dd3';

  before(() => {
    // Connexion admin
    cy.request('POST', 'http://localhost:5000/api/users/login', {
      email: 'admin@example.com',
      password: '123456',
    }).then((res) => {
      localStorage.setItem('userInfo', JSON.stringify(res.body));
    });
  });

  it('Modifier le produit Amazon Echo Dot 3rd Generation', () => {
    // Accéder à la page d'édition
    cy.visit(`http://localhost:3000/admin/product/${productId}/edit`);

    // Attendre que le loader disparaisse si présent
    cy.get('.loader', { timeout: 10000 }).should('not.exist');

    // Modifier les champs
    cy.get('#name').clear().type('Amazon Echo Dot 3rd Generation UPDATED');
    cy.get('#price').clear().type('39.99');
    cy.get('#brand').clear().type('Amazon Updated');
    cy.get('#category').clear().type('Smart Electronics');
    cy.get('#countInStock').clear().type('50');
    cy.get('#description').clear().type('Updated description for Echo Dot 3rd Gen');

    // Soumettre la modification
    cy.contains('Update').click();

    // Vérifier le retour à la liste des produits
    cy.url().should('include', '/admin/productlist');

    // Vérifier que le produit modifié est visible
    cy.contains('Amazon Echo Dot 3rd Generation UPDATED').should('exist');
  });
});
