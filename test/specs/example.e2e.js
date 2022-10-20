decribe('My first test suite',() => {
    it('my first wdio test', async () => {
      let myUrl = 'https://www.example.com'
      let smallPause = 2000
      let bigPause  = 5000

      await browser.url(myUrl)
      await browser.pause(smallPause)

      await expect(browser).toHaveTitleContaining('Example Domain')
      await expect(browser).toHaveUrlContaining('example.com')

      let pageElement = await $('h1')
      await expect(pageElement).toExist()
      await expect(pageElement).toBeDisplayed()
      await expect(pageElement).toHaveTextContaining('Exampler')
    })
    
    it.only('Forms and Input', async () => {
         browser.url('https://www.saucedemo.com')

        let usernameInput = $('#user-name')
        let passwordInput = $('#password')
        let loginBUtton = $('#login-button')

        usernameInput.setValue('standard_user')
        passwordInput.setValue('secret_sauce')
        loginBUtton.click()

        let inventoryContainer = $I('inventory_container')
        expect(inventoryContainer).toBeDisplayed()
    })
})