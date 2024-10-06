describe('E2E Authentication', () => {

    it('input valid username dan password', () => {

        //1. User open the url "https://www.saucedemo.com/"
        cy.visit('/')

        //2. User input email and password
        cy.get('#user-name').type("visual_user")
        cy.get('#password').type("secret_sauce")

        //3. User click login button
        cy.get('#login-button').click()

        //expected
        cy.url().should('include', '/inventory.html')

      //Screenshoot
        cy.screenshot('TC001 - Expected')
    })

    it('input invalid username dan password', () => {

        //1. User open the url "https://www.saucedemo.com/"
        cy.visit('/')

         //2. User input email and password
        cy.get('#user-name').type("alyaa")
        cy.get('#password').type("secret_sauce")

        //3. User click login button
        cy.get('#login-button').click()

        //expected
        cy.get('.error-message-container')

        //Screenshoot
        cy.screenshot('TC002 - Expected')

    })

    it('Logout', () => {

        //Precondition
        cy.visit('/')
        cy.get('#user-name').type("visual_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()

        //1. User click hamburger menu
        cy.get('#react-burger-menu-btn').click()

        //2. User click logout
        cy.get('#logout_sidebar_link').click()


      //Screenshoot
        cy.screenshot('TC003 - Expected')
    })

})