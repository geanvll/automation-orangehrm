import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

var Chance = require('chance')

var chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Tests Orange HRM', () => {

  it('User Info', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
   
    myInfoPage.fieldPersonalDetails(chance.first(),'Joe',chance.last())
    myInfoPage.fieldEmployeeDetails('12345','589','8965','2025-04-30')
    myInfoPage.fieldStatus()
    myInfoPage.saveButton()
  })

})
