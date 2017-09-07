var webdriver = require('selenium-webdriver');
var By =  webdriver.By;
var until = webdriver.unitl;
var website = "http://iolearn.com";

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().maximize();
driver.manage().deleteAllCookies();

// navigate to ioLearn.com
driver.get(website).then(function(){
	console.log('Website request successfull');
	driver.quit();
});

// take screenshot
// driver.takeScreenshot().then(fuction(data){
//
// })
