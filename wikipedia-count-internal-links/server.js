var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;


var driver =  new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();

driver.manage().deleteAllCookies();

driver.get('http://en.wikipedia.org/wiki/WiKi');

// find all elements by CSS, looking for links starting with /wiki/
driver.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
	console.log('Found ', links.length, 'wiki links');
	driver.quit();
});
