describe('Unibet Blog Search Feature', () => {
  beforeEach(() => {
    // Ignore specific known exceptions during tests
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('loadMoreSettings is not defined')) {
        return false; // Prevent failure due to this error
      }
    });

    // Set viewport and visit the blog
    cy.viewport(1280, 800); // Desktop view
    cy.visit('https://www.unibet.co.uk/blog');
  });

  const performSearch = (query) => {
    cy.get('#searchIcon').click({ force: true });
    cy.get('.search-field').type(`${query}{enter}`);
  };

  const verifySearchResultsContainText = (text) => {
    cy.get('.pb-4.col-md-6.col-lg-4').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('.card-subtitle, h5.card-title')
          .invoke('text')
          .then((content) => {
            expect(content.toLowerCase()).to.include(text.toLowerCase());
          });
      });
    });
  };

  it('should return results for a valid search query', () => {
    performSearch('sports'); // Search for 'sports'
    verifySearchResultsContainText('sports'); // Validate results contain 'sports'
  });

  it('should display a "no results" message for invalid queries', () => {
    performSearch('xyzinvalid'); // Search for an invalid query
    cy.get('.entry-header').should('contain', 'Nothing Found'); // Validate error message
  });

  it('should work correctly on mobile viewports', () => {
    cy.viewport(375, 667); // Mobile view
    performSearch('sports'); // Search for 'sports'
    verifySearchResultsContainText('sports'); // Validate results contain 'sports'
  });
});
