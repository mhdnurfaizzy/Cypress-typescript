import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CoProduct} from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let coProduct = new CoProduct()

///test

const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Success Checkout product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    coProduct.clickAddtoCart()
    coProduct.clickCart()
    coProduct.clickCheckout()
    coProduct.checkout('username','password','12345')
    coProduct.clickContinue()
    coProduct.clickFinish()
    coProduct.assertCheckout()
})

it("Test Sauce Demo Failed Checkout product backpack with empty first name", () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    coProduct.clickAddtoCart()
    coProduct.clickCart()
    coProduct.clickCheckout()
    coProduct.failcheckout('password','1234')
    coProduct.clickContinue()
    coProduct.assertFailCheckout()
})
