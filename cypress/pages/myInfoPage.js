class MyInfoPage{
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            midNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: '.--close',
            saveButton: "[type='submit']",
            comboBox: "[clear='false']"
        }
        return selectors
    }

    fieldPersonalDetails(firstName,middleName,lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fieldEmployeeDetails(employeeId,otherId,driverLicenseId,expireDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseId)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expireDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveButton(){
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fieldStatus(){
        cy.get(this.selectorsList().comboBox).eq(0).click()
        cy.get(':nth-child(27)').click()
        cy.get(this.selectorsList().comboBox).eq(1).click({force:true})
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    }
}

export default MyInfoPage