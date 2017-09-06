var webdriver = require('selenium-webdriver');
var By =  require('selenium-webdriver').By; // selenium namespace that locates HTML elements with specific class or id
var until = require('selenium-webdriver').until // selenium namespace that creates makes the input driver wait before switching to the designated frame
// var firefox = require('selenium-webdriver/firefox');

//open Firefox
var driver = new webdriver.Builder().forBrowser('firefox').build();

// navigate to google.com
driver.get('http://www.google.com/ncr');

// maximize the window the window
driver.manage().window().maximize();

//delete all cookies
driver.manage().deleteAllCookies();

//focus on an element via its name attribute; search google via  the webdriver
driver.findElement(By.name("q")).sendKeys('webdriver');

//click on search button
driver.findElement(By.name("btnK")).click();

// check the title element of the page
driver.wait(until.titleIs("webdriver - Google Search"), 1000);

// / control executio flow with promises
var promise =  driver.getTitle();

promise.then(function(title){
	console.log("the page title is " + title);
})

// close browser
driver.quit();





// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();
//
// driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();


// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;
//
// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();
//
// driver.get('http://www.google.com');
//
// driver.findElement(By.name('q')).sendKeys('webdriver');
//
// driver.sleep(1000).then(function() {
//   driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
// });
//
// driver.findElement(By.name('btnK')).click();
//
// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//   });
// });

// driver.quit();
