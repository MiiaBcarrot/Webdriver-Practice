describe.skip('Sauce Demo - Product Order', () => {
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
        // await browser.pause(300)
        // Put product into shopping cart
        await (await $('#inventory_container')).waitForDisplayed()
        await (await $('[data-test="add-to-cart-sauce-labs-backpack"]')).click()
        await (await $('[data-test="add-to-cart-sauce-labs-bike-light"]')).click()
        await (await $('.shopping_cart_link')).click()

        // Assert shopping cart
        await (await $('.cart_list')).waitForDisplayed()
        await (await $('[data-test="checkout"]')).click()

        // Fill customer information
        const firstName = "Peter"
        const lastName = "Angelo"
        const postalCode = "112233"

        await (await $('.checkout_info')).waitForDisplayed()
        await (await $('[data-test="firstName"]')).setValue(firstName)
        await (await $('[data-test="lastName"]')).setValue(lastName)
        await (await $('[data-test="postalCode"]')).setValue(postalCode)
        await (await $('[data-test="continue"]')).click()


        // Assert final order overview
        await (await $('.cart_list')).waitForDisplayed()
        await (await $('.summary_info')).waitForDisplayed()
        await (await $('[data-test="finish"]')).click()

        const message = await $('.complete-header')
        await expect(message).toHaveTextContaining('THANK YOU FOR YOUR ORDER')

    })
})