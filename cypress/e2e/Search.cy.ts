/// <reference types="cypress" />

describe('Unibet Blog Search Feature', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err: Error) => {
      if (err.message.includes('loadMoreSettings is not defined')) {
        return false; // Prevent failure due to this error
      }
    });

    // Set viewport and visit the blog
    cy.viewport(1280, 800); // Desktop view
    cy.visit('https://www.unibet.co.uk/blog');
  });

  /**
   * @param query - The search term to use
   */
  const performSearch = (query: string): void => {
    cy.get('#searchIcon').click({ force: true });
    cy.get('.search-field').type(`${query}{enter}`);
  };

  /**
   * @param text - The text to check for in search results
   */
  const verifySearchResultsContainText = (text: string): void => {
    cy.get('.pb-4.col-md-6.col-lg-4').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('.card-subtitle, h5.card-title')
          .invoke('text')
          .then((content: string) => {
            expect(content.toLowerCase()).to.include(text.toLowerCase());
          });
      });
    });
  };

  it('should return results for a valid search query', () => {
    performSearch('Formula');
    verifySearchResultsContainText('Formula');
  });

  it('should display a "no results" message for invalid queries', () => {
    performSearch('xyzinvalid');
    cy.get('.entry-header').should('contain', 'Nothing Found');
  });

  it('should work correctly on mobile viewports', () => {
    cy.viewport(375, 667);
    performSearch('Formula');
    verifySearchResultsContainText('Formula');
  });
});
