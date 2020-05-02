describe ('Third Test', () => {
    it ('Accepts input', () => {
      const text = 'Christian';
      cy.visit ('/');
      cy.get ('.new').type (text).should ('have.value', text);
    });
  });