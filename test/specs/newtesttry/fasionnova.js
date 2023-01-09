describe('Login Flow', () => {
    before( async, () => {
        browser.url('https://www.fashionnova.com/')
    })

    it('Should not login with invalid username and password', async () => {
       await browser.waitForDisplayed('#sign-in-button')
       await $('#sign-in-up-email-page-title').waitForDisplayed()
       await (await $('#RegisterForm-email')).setValue()
       await (await $('#LoginForm-password')).setValue()
       await (await $('input[type-"submit"]')).click()

       const errorMessage = await $('.input-wrapper-error-message')
       await expect(errorMessage).toHaveTextContaining('Password is incorrect. Please try again.')
    })
})