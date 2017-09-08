var webdriver = require("selenium-webdriver");
require('geckodriver');
require('chromedriver');

var By = require('selenium-webdriver').By;
var until =  require("selenium-webdriver").until;

//  open  firefox
var driver = new webdriver.Builder().forBrowser('firefox').build();

// maximize window
driver.manage().window().maximize();

// delete all cookies
driver.manage().deleteAllCookies();

driver.get("https://www.google.com/").then(function(){
	console.log("\n 1) Entered google query input...");
	return driver.findElement(webdriver.By.name("q"));
}).then(function(q){
	console.log("\n 2) Searched for webdriver...");
	q.sendKeys("webdriver")
}).then(function(){
		console.log("\n 3) Found search button...")
		return driver.findElement(webdriver.By.name("btnK"));
}).then(function(btnK){
	console.log("\n 4) Clicked search button...");
	return btnK.click();
}).then(function(){
	console.log("\n 5) Acquired page title...");
	driver.sleep(1000);
	return driver.getTitle();
}).then(function(title){
	console.log("\n 6) The page title is " + title);
	return driver.quit();
}).then(function(){
	console.log("\n 7) driver.quit() \n");
})
