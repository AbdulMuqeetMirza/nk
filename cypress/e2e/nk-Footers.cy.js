describe('NK Associates Footer Sections', () => {



it('Assertions of the Footer section of the NK Properties Webpage',() =>{
    cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/services');
    
    cy.get('.flex > img').should('be.visible') //assertion of the NK logo in the footer section
   // cy.get('.w-\[15\] > .mb-2').should('be.visible') //assertion of the label 'comapany'
    // cy.get('.w-\[15\] > ul > :nth-child(1) > .inline-block').should('be.visible') //assertion of the label 'Home' 
    // cy.get('.w-\[15\] > ul > :nth-child(2) > .inline-block').should('be.visible') //assertion of the label 'About'
    // cy.get('.w-\[15\] > ul > :nth-child(3) > .inline-block').should('be.visible') //assertion of the label 'property'
    cy.get(':nth-child(4) > .inline-block').should('be.visible') //assertion of the label 'projects'
    cy.get(':nth-child(5) > .inline-block').should('be.visible') //assertion of the label 'contact us'
    cy.get('.text-lg > :nth-child(1) > .inline-block').should('be.visible') //assertion of the label 'career'
    cy.get('.text-lg > :nth-child(2) > .inline-block').should('be.visible') //assertion of the label 'events'
    cy.get('.text-lg > :nth-child(3) > .inline-block').should('be.visible') //assertion of the label 'services'
    cy.get('.font-metropolis-medium > .text-base').should('be.visible') //assertion of the label 'download'
    cy.get('.mb-5 > .flex').should('be.visible') //assertion of the 'get it on google play'button
    cy.get('.mb-3 > .flex > a > .p-3').should('be.visible') //assertion of the 'download on the app store ' button
    cy.get('.w-1\/4 > .mb-1').should('be.visible') //assertion of the label 'social'
    cy.get('.w-1\/4 > .flex-wrap > :nth-child(1)').should('be.visible') //assertion of the facebook button
    cy.get('.w-1\/4 > .flex-wrap > :nth-child(2)').should('be.visible') //assertion of the twitter button
    cy.get('.w-1\/4 > .flex-wrap > :nth-child(3)').should('be.visible') //assertion of the instagram button
    cy.get('.w-1\/4 > .flex-wrap > :nth-child(4)').should('be.visible') //assertion of the linkedin button
    cy.get('.w-1\/4 > .flex-wrap > :nth-child(5)').should('be.visible') //assertion of the snapchat button
    cy.get('.w-1\/4 > .flex-wrap > :nth-child(6)').should('be.visible') //assertion of the youtube button
    cy.get('.container > .flex-col > .text-center').should('be.visible') //assertion of the copyright text
    cy.get('[href="/terms-and-conditions"]').should('be.visible') //assertion of the 'terms of use' button
    cy.get('[href="/privacy-policy"]').should('be.visible')  //assertion of the 'private policy button


  
})

})