describe("Login Flow", () => {
    before( async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    })

   it("Should login with invalid username and password", async () => {
    await browser.waitAndClick('#signin_button')
    await $('#login_form').awaitForDisplay()
    await (await $('#user_login')).setValue('test')
    await (await $('#user_passwor')).setValue('test')
    await (await $('input[type="submit"]')).click()
    const errorMessage = await $('.alert-error')
    await expect(errorMessage).toHaveTextContainning(
        'Login and/or password are wrong'
    )
   }) 

   it('Reset Account Password', async () => {
    const email = 'test@test.com'

    await browser.waitAndClick('*=Forget')
    await (await $('#user_email')).awaitForDisplay()
    await (await $('#user_email')).setValue(email)
  
    const message = await $('.span6')
    await expect(message).toHaveTextContaining('email: ${email}')
   })
})