describe("Feedback Form", () => {
    it('Should submit feedback form with all the values', async () =>{
        //define values for the form inputs
        const name = "Peter"
        const email = 'test@test.com'
        const subject = 'submit'
        const message = 'My very short message for the feedback test'

        //Click on feed button
        await browser.url('http://zero.webappsecurity.com/index.html')
        await browser.waitAndClick('#feedback')
         //Fill feedback form

        await(await $('#name')).setValue(name)
        await (await $('#email')).setValue(email)
        await (await $('#subject')).setValue(subject)
        await (await $('#comment')).setValue(message)
       
        //submit feedback form
        await (await $('input[type="submit"]')).click()
       
        //Verify correct URL
        await expect(browser).toHaveUrlContaining('sendFeedback.html')
    })
})