/// <reference types="cypress"  />

import Login from "../support/PageObjects/login"
import LandingPage from "../support/PageObjects/landingPage"

describe('Login tests', () => {
  const loginPage = new Login
  const landingPage = new LandingPage()
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fixture('testData').then(function (data){
      this.data = data
    })
  })
  it.only('should navigate to the landing page', () => {
    landingPage.getLoginBtn().should('exist')
  })
  it.only('should fail to login with valid email and invalid password', function () {
    landingPage.clickLoginBtn();
    loginPage.login(this.data.validEmail, 'unjfiunjcjk')
    loginPage.getErrorMsg().should('have.text', 'Wrong Password')
  })
  it.only('should fail to login with invalid email and valid password', function () {
    landingPage.clickLoginBtn();
    loginPage.login('john.wich@westmail.com', this.data.validPassword)
    loginPage.getErrorMsg().should('have.text', 'User not found')
  })
  it.only('should fail to login with blank email and valid password', function () {
    landingPage.clickLoginBtn();
    loginPage.login("null", this.data.validPassword)
    loginPage.getLogin().should('exist')
  })
  it.only('should fail to login with valid email and blank password', function () {
    landingPage.clickLoginBtn();
    loginPage.login(this.data.validEmail, "null")
    loginPage.getLogin().should('exist')
  })
  it.only('should fail to login with blank email and blank password', function () {
    landingPage.clickLoginBtn();
    loginPage.login("null", "null")
    loginPage.getLogin().should('exist')
  })
  
})