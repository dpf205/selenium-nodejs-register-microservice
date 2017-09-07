var webdriver = require('selenium-webdriver');
require('geckodriver');
require('chromedriver');

var By =  webdriver.By;
var until = webdriver.unitl;

var fs = require('fs');
var website = "http://www.way2automation.com/demo.html"; // or http://www.techbeamers.com/websites-to-practice-selenium-webdriver-online/

var driver = new webdriver.Builder().forBrowser('firefox').build();

// navigate to site
driver.get(website).then(function(){
	console.log('\n website request successful');
});

driver.manage().window().maximize();
driver.manage().deleteAllCookies();

// take screenshot
driver.takeScreenshot().then(function(data){
	fs.writeFileSync('screenshot.png', data, 'base64');
	console.log('\n screenshot taken of', website);
});

driver.quit().then(function(){
	console.log('\n driver.quit()')
});
