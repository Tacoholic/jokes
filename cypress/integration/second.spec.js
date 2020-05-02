describe ('Second test', () => {
    it ('Focus on the input', () => {
        cy.visit ('/');
        cy.focused ().should ('have.class', 'new task');
    })
})