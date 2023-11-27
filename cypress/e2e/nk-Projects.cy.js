
  describe('NK Associates Projects Webpage', () => {

    beforeEach(() => {
        cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/projects');
      });

      it('Assertion of the ProjectPage', () => {
        cy.get('.mx-auto > :nth-child(1) > a > img').should('be.visible') //logo assertion
        cy.get('.mr-2').should('be.visible') //get in touch button
        cy.get('.justify-between > .relative').should('be.visible') // menu button
        cy.get('.mb-7').should('be.visible') // text heading
        cy.get('.scrollbar-hide > :nth-child(1)').should('be.visible') //1st clickable button after heading
        cy.get('.scrollbar-hide > :nth-child(2)').should('be.visible') //2nd clickable button after heading
        cy.get('.scrollbar-hide > :nth-child(3)').should('be.visible') //3rd clickable button after heading
        cy.get('.scrollbar-hide > .bg-gradient-to-b').should('be.visible') //4th clickable button after heading
        cy.contains('.mr-2','Get in touch').should('be.visible') //get in touch button
        cy.contains('.mb-7','NK Projects').should('be.visible') // text heading
        cy.contains('.scrollbar-hide > :nth-child(1)','Residential').should('be.visible') //1st clickable button after heading
        cy.contains('.scrollbar-hide > :nth-child(2)','Commercial').should('be.visible') //2nd clickable button after heading
        cy.contains('.scrollbar-hide > :nth-child(3)','Hotel').should('be.visible') //3rd clickable button after heading
        cy.contains('.scrollbar-hide > .bg-gradient-to-b','All').should('be.visible') //4th clickable button after heading
        cy.get('[href="projects/14"] > .project-card > .px-4').should('be.visible') //1st project text/details part
        cy.get('[href="projects/14"] > .project-card > .projects-carousel > .swiper > .swiper-wrapper > .swiper-slide-active > .h-full').should('be.visible') //1st project image part
        cy.get('[href="projects/14"] > .project-card > .px-4 > .flex-col > :nth-child(4)').should('be.visible') //1st project text 1
        cy.get('[href="projects/14"] > .project-card > .px-4 > .flex-col > :nth-child(5)').should('be.visible') //1st project text 2
        cy.get('[href="projects/14"] > .project-card > .px-4 > .mt-auto > .mb-5').should('be.visible') //1st project text 3
        cy.get('[href="projects/14"] > .project-card > .px-4 > .mt-auto > .items-start > .line-clamp-2').should('be.visible') //1st project text 4
        cy.get('[href="projects/14"] > .project-card > .px-4 > .mt-auto > .mb-5').should('be.visible') //1st location vector image
    })
    
    it('Clicking the Selector Buttons under heading and its post Assertion', () => {
      cy.get('.scrollbar-hide > :nth-child(1)').click() //Clicking on 1st clickable button after heading
      cy.contains('[href="projects/14"] > .project-card > .px-4 > .mt-auto > .mb-5','Residential').should('be.visible') //Post assertion of 1st clickable button after heading
      cy.get('.scrollbar-hide > :nth-child(2)').click() //Clicking on 2nd clickable button after heading
      cy.contains('[href="projects/17"] > .project-card > .px-4 > .mt-auto > .mb-5','Commercial').should('be.visible') //Post assertion of 2nd clickable button after heading
      cy.get('.scrollbar-hide > :nth-child(3)').click() //Clicking on 3rd clickable button after heading
      cy.get('#smooth-content > div > div > div > div.container.flex.justify-center.overflow-hidden.p-0 > div > button:nth-child(4)').click() //Clicking on 4th clickable button after heading
    })


  })