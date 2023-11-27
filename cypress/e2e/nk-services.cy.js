
describe('NK Associates Services Webpage', () => {

    beforeEach(() => {
        cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/services');
      });
      
    it('Assertion of the Services Page', () => {

        cy.get('.text-3xl').should('be.visible') //assertion of the 'services' heading
        cy.get('.max-w-5xl').should('be.visible') // assertion of the text present below the heading
        cy.get('.text-original').should('be.visible') //assertion of the 'contact us' button
        cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center') //assertion of the 1st service card
        cy.get('.pin-spacer-service_card-1 > .service-card > .left-0 > .text-center') //assertion of the 2nd service card
        cy.get('.pin-spacer-service_card-2 > .service-card > .left-0 > .text-center') //assertion of the 3rd service card
        cy.get('.pin-spacer-service_card-3 > .service-card > .left-0 > .text-center') //assertion of the 4th service card
        cy.get('.z-40 > .mx-auto').should('be.visible') //assertion of the header
        cy.get('.py-6').should('be.visible') //assertion of the footer

    })

    it('Clicking on the "Contact Us" Button',() => {

        cy.get('.text-original').click()
        cy.url().should('include','https://develop.d2vr74cwsk1kb.amplifyapp.com/contact')  //assertion of the contact us page url

    })

    it('Clicking on the 1st service card',() => {

        cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center > .block > .w-full').click() 
        cy.url().should('include','https://develop.d2vr74cwsk1kb.amplifyapp.com/services/1') //clicking on the 1st service card redirects user to related url
    })

    it('Clicking on the 2nd service card',() => {

        cy.get('.pin-spacer-service_card-1 > .service-card > .left-0 > .text-center > .block > .w-full').click()      
        cy.url().should('include','https://develop.d2vr74cwsk1kb.amplifyapp.com/services/2') //clicking on the 2nd service card redirects user to related url
    })

    it('Clicking on the 3rd service card',() => {

        cy.get('.pin-spacer-service_card-2 > .service-card > .left-0 > .text-center > .block > .w-full').click()      
        cy.url().should('include','https://develop.d2vr74cwsk1kb.amplifyapp.com/services/3') //clicking on the 3rd service card redirects user to related url
    })

    it('Clicking on the 4th service card',() => {

        cy.get('.pin-spacer-service_card-3 > .service-card > .left-0 > .text-center > .block > .w-full').click()      
        cy.url().should('include','https://develop.d2vr74cwsk1kb.amplifyapp.com/services/4') //clicking on the 4th service card redirects user to related url
        //cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center > .py-4 > .hidden > .transition-all').click({force: true})
    })

  })