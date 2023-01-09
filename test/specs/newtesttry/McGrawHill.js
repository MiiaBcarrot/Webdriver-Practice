describe('Login Flow', () => {
    before( async () => {
        await browser.url('https://www.mheducation.com/highered/connect')

    })

    it('Should not login with invalid username and password',async () => {
        await browser.waiForDisplayed('#signInLink')
        await $('#')

    })
    it('')
})