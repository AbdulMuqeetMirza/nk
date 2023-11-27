beforeEach(() => {
    cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/properties');
  });
describe('NK Associates Properties Webpage', () => {

it('Assertions of the NK Properties webPage ', () => {

    cy.get('.my-4').should('be.visible')//search section assertion
    cy.get('.z-40 > .mx-auto').should('be.visible') //header assertion
    cy.get('.mx-auto > .justify-between > .mr-2').should('be.visible') //get in touch button assertion
    cy.get('[class="min-w-[119px] hidden md:flex items-center justify-center bg-white hover:text-nk-red rounded-full px-5 py-1.5 cursor-pointer shadow-3xl"]').should('be.visible') //filters button assertion
    cy.get('.infinite-scroll-component > .container > :nth-child(1)').should('be.visible') //product listing 1 assertion
    cy.get('.infinite-scroll-component > .container > :nth-child(2)').should('be.visible') //product listing 2 assertion
    cy.get('.self-center > span').should('be.visible') //show map button assertion
    cy.get('.min-h-fit > .py-6').should('be.visible') //footer assertion
    
  })


it('The "Search" section of the NK Properties Page ', () => {

    cy.get(':nth-child(1) > :nth-child(1) > .h-full').click() //clicking on the property type dropdown
    cy.get('[for="Residential"]').click() //selecting the residential option from the property type dropdown
    cy.get(':nth-child(3) > :nth-child(1) > .h-full').click() //clicking on the property dropdown
    cy.get('[for="NK HEIGHTS"]').click() //selecting the NK Heights option from the property dropdown
    cy.get(':nth-child(4) > :nth-child(1) > .h-full').click() //clicking on the location dropdown
    cy.get('[for="Phase 07 "]').click() //selecting the Phase 07 option from the location dropdown
    cy.get(':nth-child(5) > :nth-child(1) > .h-full').click() //clicking on the purpose dropdown
    cy.get('[for="Buy"]').click() //selecting the BUY option from the Purpose dropdown

    // cy.get('.my-6 > :nth-child(2) > :nth-child(1) > .h-full').click()
    // // cy.get('.border-nk-red-0').invoke('val',200000).trigger('input');
    // cy.get('.border-nk-red-1').invoke('aria-valuenow',200000000).trigger('input');

    cy.get('.my-6 > .justify-center').click() // clicking the search button

  })

  it('The "Show Map" Button of the NK Properties webPage ', () => {

    cy.get('.self-center').click()
    cy.get('#smooth-content > div > section > div > button > span').should('be.visible')

  })

  it('Clicking on the 1st Product Listed on the NK Properties webPage ', () => {

    cy.get(':nth-child(1) > a.relative > .aspect-w-1 > .property-image').click()
    cy.url().should('include','/75')

  })

  it('Clicking on the 2nd Product Listed on the NK Properties webPage ', () => {

    cy.get(':nth-child(2) > a.relative > .aspect-w-1 > .property-image').click()
    cy.url().should('include','/78')

  })

 

  


})






