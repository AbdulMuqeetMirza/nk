import loginData from '../fixtures/example.json'
describe('NK Associates Contact Us Webpage', () => {
  it('CLICKING ON "Get In touch" button redirects user to the Contact Us page ', () => {
    cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/')
    cy.get(
      '#smooth-wrapper > div > div > div.mx-auto.my-auto.flex.w-[95%].items-center.justify-between.px-3.py-3 > div.flex.justify-between > a',
    ).click() //clicking the get in touch button
    cy.url().should('include', '/contact')
  })

  it('The Assertions on the "Contact Us" Screen ', () => {
    cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/contact')
    cy.get(
      '[class="text-center font-metropolis-bold text-[1.75rem] text-nk-black md:text-5xl"]',
    ).should('be.visible') //contact us heading assertion
    cy.get('[for="name"]').should('be.visible') //  your name label assertion
    cy.get('[for="email"]').should('be.visible') //  your email label assertion
    cy.get('[for="phone"]').should('be.visible') //  your phone label assertion
    cy.get('[for="subject"]').should('be.visible') //  subject label assertion
    cy.get('[for="category"]').should('be.visible') //  category label assertion
    cy.get('[for="message"]').should('be.visible') //   message label assertion
    cy.get(':nth-child(1) > .font-metropolis-light').should('be.visible') //assertion of the name field
    cy.get('.grid > :nth-child(2) > .font-metropolis-light').should(
      'be.visible',
    ) //assertion of the email field
    cy.get(':nth-child(3) > .font-metropolis-light').should('be.visible') //assertion of number field
    cy.get(':nth-child(4) > .font-metropolis-light').should('be.visible') //assertion of the subject field
    cy.get('[name="category"]').should('be.visible') //assertion of the categories dropdown menu
    cy.get('[name="message"]').click().should('be.visible') //assertion of the message field
    cy.get(
      '[class="text-original relative w-full text-center text-nk-white"]',
    ).should('be.visible') //assertion of the submit button
    cy.get('.z-40 > .mx-auto').should('be.visible') //assertion of the header of the webpage
    cy.get('.min-h-fit > .py-6').should('be.visible') //assertion of the footer of the webpage
    cy.get('.card-component > :nth-child(1)').should('be.visible') // assertion of the office details 1
    cy.get('.card-component > :nth-child(2)').should('be.visible') // assertion of the office details 2
    cy.get('.card-component > :nth-child(3)').should('be.visible') // assertion of the office details 3
    cy.get('.card-component > :nth-child(4)').should('be.visible') // assertion of the office details 4
    cy.get('.flex-col > .mb-5').should('be.visible') // assertions of the "head office location" title label
    // cy.get('#google-map > div > div > div:nth-child(2) > div:nth-child(2)').should('be.visible') // assertion of the map screen
  })

  it('The inputs on the "Contact Us" Screen ', () => {
    cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/contact')
    cy.get(':nth-child(1) > .font-metropolis-light').type(loginData.urname) //entering data in the name field
    cy.get('.grid > :nth-child(2) > .font-metropolis-light').type(
      loginData.uremail,
    ) //entering data in the email field
    cy.get(':nth-child(3) > .font-metropolis-light').type(loginData.urphone) //entering data in the phone number field
    cy.get(':nth-child(4) > .font-metropolis-light').type(loginData.ursubject) //entering data in the subject field
    cy.get('[name="category"]').select('buy') //selecting a option from the categories dropdown menu
    cy.get('[name="message"]').click().type(loginData.urmessage) //entering data in the message field
    cy.get(
      '[class="text-original relative w-full text-center text-nk-white"]',
    ).click() //clicking the submit button
    // cy.get('[id="4DD9F496-D711-471D-9C83-8ADE74CEA2B4"]').click() //clicking in the satellite button on the map screen
  })
})
