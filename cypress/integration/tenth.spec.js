describe ('New UI tests', () => {
    it('should type in a users name, select sports category, then click for a joke'
    , () =>{
        const text = "Christian"
        cy.visit('/')
        cy.wait(2000)
        cy.get('.new').type (text).should ('have.value', text)
        cy.wait(2000)
        cy.get('.modal-btn').click()
        cy.get('.btn-sports').click()
        cy.get('.btn-joke').click()

    })
})