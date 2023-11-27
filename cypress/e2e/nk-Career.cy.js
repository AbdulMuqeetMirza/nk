describe('Nk Associates Career Webpage', () => {
  beforeEach(() => {
    cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/careers')
  })

  it('Assertions of the Career page', () => {
    cy.get('div.mb-8 > .mb-8').should('be.visible') // Heading
    cy.get('.my-auto > img').should('be.visible') // picture under the button
    cy.get(':nth-child(2) > .my-8').should('be.visible') // sub heading text after picture
    cy.get('.text-based').should('be.visible') // text after the heading
    cy.get('#Listing > .py-2 > .inline-flex > .text-original').should(
      'be.visible',
    ) // contact us button
    cy.get('.h-1 > .relative > .border-nk-gray').should('be.visible') // search here field
    cy.get('.hidden > :nth-child(1) > .relative > .border-nk-gray').should(
      'be.visible',
    ) // department select field
    cy.get(':nth-child(2) > .relative > .border-nk-gray').should('be.visible') //city selection field
    cy.get('[class="text-nk-red inline-block lg:text-2xl"]').should(
      'be.visible',
    ) // sales heading written in red
    cy.get(
      '[class="font-metropolis-extralight lg:font-metropolis my-2 text-xs lg:text-base"]',
    ).should('be.visible') // text under sales heading
    cy.get(
      '[class="absolute -left-[1px] bottom-0 right-0 top-0 h-full w-[calc(100%+2px)] overflow-hidden rounded-full"]',
    ).should('be.visible') // view more button
    cy.get(
      '[class="flex items-center justify-center gap-0.5 lg:order-1 lg:justify-end"]',
    ).should('be.visible') //location
    cy.get(
      '[class="my-8 text-center font-metropolis-bold text-3xl text-nk-dark-gray lg:text-4xl "]',
    ).should('be.visible') // don't see right role heading
    cy.get(
      '[class="absolute -left-[1px] bottom-0 right-0 top-0 h-full w-[calc(100%+2px)] overflow-hidden rounded-full"]',
    ).should('be.visible') //submit your resume button
  })

  it('Clicking on "Be A Part" button and selecting role', () => {
    cy.get('div.mb-8 > .flex > .py-2 > .inline-flex > .text-original').click() // be a part button click
    cy.get('.h-1 > .relative > .border-nk-gray').type('WASIF')
    cy.get('.hidden > :nth-child(1) > .relative > .border-nk-gray').select(
      'SQA',
    )
    cy.get(':nth-child(2) > .relative > .border-nk-gray').select('Islamabad')
  })
})
