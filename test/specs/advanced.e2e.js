describe('Advanced Testing',() => {
    beforeEach(async () => {
    await browser.url('https://the-internet.herokuapp.com/upload') 
})

   it("File Upload 1", async() => {
    const filePath = './my-screenshot.png'
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
    await browser.pause(5000)
   }) 

   it("File Upload 2", async() => {
    const filePath = './my-screenshot.png'
    await browser.customFileUpload(filePath)
    await browser.pause(5000)
   })

   it('File Upload 3', async () => {
    const filePath = './my-screenshot.png'
    await browser.customFileUpload(filePath)
    await browser.pause(5000)
   })

   it("Display Title and Url", async () => {
    const results = await browser.getTitleAndUrl()
    console.log("TITLE =" + results.title)
    console.log("URL =" + results.url)

    await browser.waitAndClick('#file-submit')
    await browser.pause(5000)
   })

   it("Change browser Session", async () => {
    console.log('SESSION BEFORE RELOAD ' + browser.sessionId)
    await browser.reloadSession()
    console.log('SESSION AFTER RELOA ' + browser.sessionId)
   })

   it('Create and Swich New Window', async () => {
    await browser.url('https://google.com')
    await browser.newWindow('https://webdriver.io')
    await browser.pause(5000)
    await browser.switchWindow('google.com')
    await browser.pause(5000)
   })

   it('Network Throttle', async () => {
    await browser.throttle('Regular2G')
    await browser.url('https://webriver.io')
    await browser.pause(3000)

        await browser.throttle('Regular4G')
        await browser.url('https://webriver.io')
        await browser.pause(3000)

            await browser.throttle('offline')
            await browser.url('https://webriver.io')
            await browser.pause(3000)
   })

   it('Execute Javascript Code', async () => {
    const result = await browser.execute(
        (a, b) => {
            return a + b 
        },
        5,
        10
    )
    await expect(result).toBe(15)
   })

it("Execute Async Javascript Code", async () => {
    const result = await browser.executeAsync(
        (a, b, done) => { 
         setTimeout(() => {
            done(a + b)
         }, 3000) 
        },
        5,
        10
        ) 
        await expect(result).toBe(15)
})
})