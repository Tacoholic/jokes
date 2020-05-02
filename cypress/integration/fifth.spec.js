

describe ('UI tests', () => {
    it('should lead me all the way to Sports Jokes page', () =>{
        const text = "Christian"
        cy.visit('/')
        cy.get('.new').type (text).should ('have.value', text)
        cy.get('.modal-btn').click()
        cy.get('.btn-second').click()
    })
})

//Passed

