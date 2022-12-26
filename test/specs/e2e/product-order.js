describe('Sauce Demo - Product Order', () => {
    before(async () => {
        // Here goes login
        await browser.url('https://www.saucedemo.com/')
        await browser.sauceLogin()

    })
    after(async () => {
        // Here goes logout
        await browser.sauceLogout()
    })
    it('Should complete product order', async () => {
        await browser.pause(300)
        // Put product into shopping cart
        // Assert shopping cart
        // Fill customer information
        // Assert final order overview
    })
})