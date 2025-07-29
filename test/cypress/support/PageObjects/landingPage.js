class LandingPage {
    getLoginBtn() {
        return cy.get('.links-container > [href="/login"]')
    }

    getPageHeading() {
        return cy.get('h1')
    }

    clickLoginBtn() {
        cy.get('.links-container > [href="/login"]').click();
    }
}
export default LandingPage;