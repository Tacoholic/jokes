

describe ('UI tests', () => {
    it('should navgitate to landing page after submitting with button', () =>{
        const text = "Christian"
        cy.visit('/')
        cy.get('.new').type (text).should ('have.value', text)
        cy.get('.modal-btn').click()
    })
})

//Passed