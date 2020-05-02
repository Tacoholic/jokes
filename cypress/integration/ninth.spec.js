
describe ('UI tests', () => {
    it('should lead to Sports Jokes page,then three jokes will display, with pauses inbetween and then switch to Dad Jokes and display two dad jokes'
    , () =>{
        const text = "Christian"
        cy.visit('/')
        cy.wait(2000)
        cy.get('.new').type (text).should ('have.value', text)
        cy.wait(2000)
        cy.get('.modal-btn').click()
        cy.get('.btn-second').click()
        cy.get('.btn-joke').click()
        cy.wait(2000) 
        cy.get('.btn-joke').click()
        cy.wait(2000) 
        cy.get('.btn-joke').click()
        cy.get('.btn-dad').click()
        cy.get('.btn-joke').click()
        cy.wait(2000) 
        cy.get('.btn-joke').click()  
        cy.wait(2000) 
        cy.get('.btn-joke').click() 
        cy.wait(2000) 
        cy.get('.btn-home') 

    })
})