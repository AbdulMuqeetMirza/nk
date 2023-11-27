describe('NK Associates Events Webpage', () => {

    beforeEach(() => {
        cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/events');
      });

    it('Assertions of the Events Webpage', () => {
        cy.wait(8000)
       // cy.get('.md\:text-5xl').should('be.visible') //assert heading titled 'unveiling our journey'
        cy.get('[class="text-center font-metropolis-extrabold text-3xl text-nk-black md:text-5xl"]').should('be.visible') // assert text below heading
        cy.get('.hidden.items-center > .container > .swiper').should('be.visible') //assertion of images below the title text 
        cy.get('.text-black').should('be.visible') // assert 2nd heading titled 'latest news and events'
        cy.get('.card-component > :nth-child(1) > :nth-child(1)').should('be.visible') //assert listed event 1
        cy.get('.card-component > :nth-child(3) > :nth-child(1)').should('be.visible') //assert listed event 2
        cy.get('.card-component > :nth-child(5) > :nth-child(1)').should('be.visible') //assert listed event 3
        cy.get('.card-component > :nth-child(7) > :nth-child(1)').should('be.visible') //assert listed event 4
        cy.get('.z-40 > .mx-auto').should('be.visible') //assert header
        cy.get('.py-6').should('be.visible') //assert footer
    })

    it('clicking the "read more" option on the 1st listed event', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .flex-col > .flex > div.cursor-pointer').click()
        cy.get('.fixed.justify-center > .m-auto').should('be.visible') //assert new screen displayed showing details about the event
        
    })

    it('clicking the "read more" option on the 2nd listed event', () => {
        cy.get(':nth-child(3) > :nth-child(1) > .flex-col > .flex > div.cursor-pointer').click()
        cy.get('.fixed.justify-center > .m-auto').should('be.visible')//assert new screen displayed showing details about the event
        
        
    })

    it('clicking the "read more" option on the 3rd listed event', () => {
        cy.get(':nth-child(5) > :nth-child(1) > .flex-col > .flex > div.cursor-pointer').click()
        cy.get('.fixed.justify-center > .m-auto').should('be.visible')//assert new screen displayed showing details about the event
        
        
    })

    it('clicking the "read more" option on the 4th listed event', () => {
        cy.get(':nth-child(7) > :nth-child(1) > .flex-col > .flex > div.cursor-pointer').click()
        cy.get('.fixed.justify-center > .m-auto').should('be.visible')//assert new screen displayed showing details about the event
        
        
    })



})