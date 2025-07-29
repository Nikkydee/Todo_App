class HomePage {
    getAddTodoBtn() {
        return cy.get('.add-todo-button')
    }

    getInputTodoField() {
        return cy.get('#modal-input')
    }

    enterTodo(todo) {
        this.getInputTodoField().type(todo)
    }

    cancelNewTodoModal() {
        cy.get('.create-todo-modal > .icon-center-button').click();
    }

    getTodoList() {
        return cy.get('.todo-list')
    }
    getEditField(todo) {
        return cy.get('#edit-modal-input').type(todo)
    }
    getEditIcons() {
        return cy.get('label.icon-center-button')
    }
    getDeleteIcons() {
        return cy.get('button.icon-center-button')
    }
}
export default HomePage;