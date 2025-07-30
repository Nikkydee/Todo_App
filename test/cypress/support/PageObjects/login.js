
class Login {
  getEmailField() {
    return cy.get('[type="email"]')
  }
  getPasswordField() {
    return cy.get('[type="password"]')
  }
  getSubmitBtn() {
    return cy.get('.main-button')
  }
  getErrorMsg() {
    return cy.get('.error-message')
  }

  getLogin() {
    return cy.get('h1')
  }

  login(email, password) {
    
    if(email === "null") {
      this.getPasswordField().type(password)
      this.getSubmitBtn().click();
    }else if(password === "null") {
      this.getEmailField().type(email);
      this.getSubmitBtn().click();
    }else if(email && password) {
      this.getEmailField().type(email);
      this.getPasswordField().type(password)
      this.getSubmitBtn().click();
    }
   
  }
}
export default Login