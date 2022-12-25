describe("Login Flow", () => {
    before( async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    })

   it('Should not login with invalid username and password', async () => {
    await browser.waitAndClick('#signin_button')
    await $('#login_form').waitForDisplayed()
    await (await $('#user_login')).setValue('test')
    await (await $('#user_password')).setValue('test')
    await (await $('input[type="submit"]')).click()

    const errorMessage = await $('.alert-error')
    await expect(errorMessage).toHaveTextContaining(
        'Login and/or password are wrong'
    )
   }) 

   it('Reset Account Password', async () => {
    const email = 'test@test.com'

    await browser.waitAndClick("*=Forgot")
    await (await $('#user_email')).waitForDisplayed()
    await (await $('#user_email')).setValue(email)
    await (await $('input[type="submit"]')).click()
  
    const message = await $('.span6')
    await expect(message).toHaveTextContaining(`email: ${email}`)
   })
})