describe('Validation for cura app',function(){

    it('Launch app',function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    it('Login',function(){
      cy.get('#btn-make-appointment').click()
cy.get('#txt-username').type('John Doe')
      // txt-password
      cy.get('#txt-password').type('ThisIsNotAPassword')
      //btn-login
      cy.get('#btn-login').click()
    })

    it('Make Appointmennt',function(){
        //btn-make-appointment
        cy.get('#btn-make-appointment').click()
        cy.get('select').select('Seoul CURA Healthcare Center')
        //chk_hospotal_readmission
        cy.get('#chk_hospotal_readmission').click()
        // #radio_program_medicare
        cy.get('#radio_program_medicare').click()
        //#txt_visit_date
        cy.get('#txt_visit_date').type('30/11/2021')

        // #txt_comment
        cy.get('#txt_comment').click({force:true})
        cy.get('#txt_comment').type('valid and success')
        // #btn-book-appointment
        cy.get('#btn-book-appointment').click()
    })

    it('success validation',function(){
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains('valid and success')
    })
})