
describe ('UI tests', () => {
    it('should lead me all the way to Sports Jokes page, and then displaying three jokes in a row with pauses inbetween'
    , () =>{
        const text = "Christian"
        cy.visit('/')
        cy.get('.new').type (text).should ('have.value', text)
        cy.get('.modal-btn').click()
        cy.get('.btn-second').click()
        cy.get('.btn-joke').click()
        cy.wait(3000) 
        cy.get('.btn-joke').click()
        cy.wait(3000) 
        cy.get('.btn-joke').click()
    })
})
