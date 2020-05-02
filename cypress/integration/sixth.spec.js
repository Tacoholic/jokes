

describe ('UI tests', () => {
    it('should lead me all the way to Sports Jokes page, and then display a joke upon clicking the button', () =>{
        const text = "Christian"
        cy.visit('/')
        cy.get('.new').type (text).should ('have.value', text)
        cy.get('.modal-btn').click()
        cy.get('.btn-second').click()
        cy.get('.btn-joke').click()

    })
})
