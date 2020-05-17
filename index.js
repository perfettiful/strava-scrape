const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.strava.com/beacon/C36BAQgPjiR')

	const result = await page.evaluate(() => {
       
 	  let distance = document.querySelector('#stat-distance').innerText
 	  let movingTime = document.querySelector('#stat-moving-time').innerText
 	  let battery = document.querySelector('#stat-battery-level').innerText
    return {
	    distance,
        movingTime,
        battery
	  }
  })

    console.log("| --------- Marty's Splitz -----------")
  console.log(result)

  browser.close()
})()