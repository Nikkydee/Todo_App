/// <reference types="cypress"  />

import Login from "../support/PageObjects/login"
import LandingPage from "../support/PageObjects/landingPage"
import HomePage from "../support/PageObjects/homePage"
import data from '../fixtures/testData.json'

describe('CRUD tests', () => {
    const loginPage = new Login
    const landingPage = new LandingPage()
    const homePage = new HomePage();

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        landingPage.clickLoginBtn();
        loginPage.login(data.validEmail, data.validPassword)
    })
    it('should an create item successfully', () => {
        homePage.getAddTodoBtn().click()
        homePage.enterTodo('Complete the UI assessment{enter}')
        homePage.cancelNewTodoModal();
        homePage.getTodoList().eq(0).find('li').should('have.length', 1)
        homePage.getTodoList().eq(0).find('li').first()
            .should('contain', 'Complete the UI assessment')

    })
    it('should create more items', function () {
        homePage.getAddTodoBtn().click()
        homePage.enterTodo('Remember to include a README file {enter}')
        cy.wait(1000)
        homePage.enterTodo('Complete the API assessment {enter}')
        homePage.cancelNewTodoModal();
        homePage.getTodoList().eq(0).find('li').should('have.length', 3)
        homePage.getTodoList().eq(0).find('li').eq(1)
            .should('contain', 'Remember to include a README file')
        homePage.getTodoList().eq(0).find('li').eq(2)
            .should('contain', 'Complete the API assessment')
    })

    it('should update an existing task', function () {
        homePage.getEditIcons().eq(2).click();
        homePage.getEditField(' and submit!! {enter}')
        homePage.getTodoList().eq(0).find('li').eq(2)
            .should('contain', 'Complete the API assessment and submit!!')
    })

    it('should delete existing tasks', function () {
        homePage.getDeleteIcons()
            .then(($deleteIcons) => {
                const deleteCount = $deleteIcons.length;
                for (let i = 0; i < deleteCount; i++) {
                    cy.wait(1000)
                    cy.wrap($deleteIcons[0]).click({ force: true });
                }
            });
        homePage.getEditIcons()
            .then(($todo) => {
                const todoCount = $todo.length
                for (let i = 0; i < todoCount; i++) {
                    cy.wrap($todo[i]).should('not.exist')
                }
            })
    })
})