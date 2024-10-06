describe('E2E Product', () => {

    it('Add Product to cart', () => {

      //PreCondition
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type("visual_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()

      //1. user is on dashboard page "https://www.saucedemo.com/inventory.html"
        cy.url().should('include', '/inventory.html') 

      //2. user click the product
        cy.contains('Sauce Labs Fleece Jacket').click()

      //3. user click button "add to cart"
        cy.url().should('include', 'inventory-item.html?id=5')
        cy.get('.btn_inventory').should('exist').click()

      //Expected
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('exist')

      //Screenshoot
        cy.screenshot('TC004 - Expected')
    })

    it('Remove Product from cart', () => {

       //PreCondition
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type("visual_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('.inventory_list').contains('Sauce Labs Onesie').get('#add-to-cart-sauce-labs-onesie').click()

      //1. user is on dashboard page ""https://www.saucedemo.com/inventory.html"
        cy.url().should('include', '/inventory.html') 

      //2. user click the cart
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')

      //3. user click remove
        cy.contains('Sauce Labs Onesie').get('.cart_button').click()

      //expected
        cy.get('Sauce Labs Onesie').should('not.exist')

      //Screenshoot
        cy.screenshot('TC005 - Expected')

    })

  })