describe.skip('My first test suite',() => {
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
      await expect(pageElement).toHaveTextContaining('Example')
    })
    
    it.only('Forms and Input', async () => {
         browser.url('https://www.saucedemo.com')

        let usernameInput = $('#user-name')
        let passwordInput = $('#password')
        let loginBUtton = $('#login-button')

       await usernameInput.setValue('standard_user')
       await passwordInput.setValue('secret_sauce')
       await loginBUtton.click()

        let inventoryContainer = $('#inventory_container')
        expect(inventoryContainer).toBeDisplayed()
    })

    it('selectbox and checkbox', async () => {
      await browser.url('https://devexpress.github.io/testcafe/example/')

      let selectbox = await $('#preferred-interface')
      await selectbox.selectByVisibleText('Both')

      let option = await $('option=Both')
      await expect(option).toBeSelected()
    })
    it("Set Browser Size", async () => {
      let width = 800
      let height = 800

      browser.setWindowSize(width, height)
      await browser.url('https://www.example.com')

      let selector = await $('h1')
      await selector.waitForExist()
      await selector.waitForDisplayed()

      await browser.pause(5000)
    })

    it("Device Emulation", async () => {
      let mobile = [375, 812]
      let tablet = [1024, 768]
      let desktop = [1650, 1050]

      //Mobile Device
      browser.setWindowSize(mobile[0], mobile[1])
      await browser.url('https://www.example.com')
      await browser.pause(2000)

      //Tablet Device
      browser.setWindowSize(tablet[0], tablet[1])
      await browser.url('https://www.example.com')
      await browser.pause(2000)

      //Desktop Device
      browser.setWindowSize(desktop[0], desktop[1])
      await browser.url('https://www.example.com')
      await browser.pause(2000)
    })

    it("Screenshots", async () => {
      await browser.url('https://www.example.com')
      await browser.saveScreenshot('my-screenshot.png')

      let title = await $('h1')
      await title.saveScreenshot('title-screenshot.png')
    })
})