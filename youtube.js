const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.youtube.com/feed/trending')

	const result = await page.evaluate(() => {
       
 	  let links = document.querySelector('a').innerText

    return {
	    links
   
	  }
  })

    console.log("| --------- All links-----------")
  console.log(result)

  browser.close()
})()