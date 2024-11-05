class LoginPage{
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredential: "[role='alert']"
        }

        return selectors
    } 

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    accessUserInvalid(){
        cy.get(this.selectorsList().wrongCredential)
    }
}

export default LoginPage