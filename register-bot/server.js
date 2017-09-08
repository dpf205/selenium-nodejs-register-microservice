// require('chromedriver');
require('geckodriver');
var webdriver =  require('selenium-webdriver');
var By =  webdriver.By;
var  until =  webdriver.until;

	//http://www.techbeamers.com/websites-to-practice-selenium-webdriver-online/ or http://phptravels.com/demo/
var website =  'https://www.teleflora.com/account/signup.jsp' ;
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

driver.get(website).then(function(){
	console.log('\n 1) successfully found ', website);
});

driver.findElement(By.id('email')).sendKeys('f58220@yahoo.com').then(function(){
	console.log('\n 2) entered email');
});

var password = 'TeleFlora123';
driver.findElement(By.id('password')).sendKeys(password).then(function(){
	console.log('\n 3) entered password');
});

driver.findElement(By.id('confirm_password')).sendKeys(password).then(function(){
	console.log('\n 4) confirmed password');
});

driver.findElement(By.id('first_name')).sendKeys('John').then(function(){
	console.log('\n 5) entered first name');
});

driver.findElement(By.id('last_name')).sendKeys('Brown').then(function(){
	console.log('\n 6) entered last name');
});

driver.findElement(By.id('phone_number')).sendKeys('2123344567').then(function(){
	console.log('\n 7) entered phone number');
});

// select dropdown using CSS syntax
driver.findElement(By.css('#birthday-month > option:nth-child(3)')).click().then(function(){
	console.log('\n 8) selected Birthday Month dropdown');
});

driver.findElement(By.css('#birthday_day > option:nth-child(17)')).click().then(function(){
	console.log('\n 9) selected Birthday Day dropdown');
});

driver.findElement(By.css('#gender-val > option:nth-child(3)')).click().then(function(){
	console.log('\n 10) selected Gender');
});

driver.findElement(By.css('#marital-val > option:nth-child(3)')).click().then(function(){
	console.log('\n 11) selected Marital Status');
});


// change css:  execute script property on page to locate hidden css for the 2 checksboxes
driver.executeScript("document.getElementById('optin_SK1900123').style.position = 'relative';");
driver.executeScript("document.getElementById('optin_SK1900123').style.left = '0px';");

driver.executeScript("document.getElementById('optin_SK1900122').style.position = 'relative';");
driver.executeScript("document.getElementById('optin_SK1900122').style.left = '0px';");

driver.findElement(By.id('optin_SK1900123')).click().then(function(){
	console.log('\n 12) unselected "Rewards Opt-in Message" checkbox');
});

driver.findElement(By.id('optin_SK1900122')).click().then(function(){
	console.log('\n 13) unselected "Receive Teleflora emails" checkbox');
});

driver.findElement(By.id('createAccountBtn')).click().then(function(){
	console.log('\n 14) clicked "Create Account Button" \n');
})

driver.sleep(15000);
