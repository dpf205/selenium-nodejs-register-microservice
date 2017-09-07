var webdriver =  require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver =  new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

// custom functions
function findIOLearnLink(){ // Error: ECONNREFUSED connect ECONNREFUSED 127.0.0.1:57217
	return driver.findElements(webdriver.By.css('[href="http://www.iolearn.com/"]')).then(function(result){ 
		return result[0];
	})
}

function clickLink(link){
	link.click();
}

function logTitle(){
	driver.sleep(1000);
	driver.getTitle().then(function(title){
		console.log('Current page title: ' + title);
	});
}

function closeBrowser(){
	driver.quit();
}

function handleFailure(err){
	console.log("Something went wrong. Closing browser.", err.stack);
}

driver.get('https://www.google.com').then(function(){
	console.log('Found google.com');
	closeBrowser();
})

// navigate to google.com search box and  select name attribute for search button
driver.findElement(webdriver.By.name('q')).sendKeys('iolearn.com: Online video tutorials and trainings').then(function(){ // ECONNREFUSED connect ECONNREFUSED
	console.log('\n Entered search query');
})

// click search button
driver.findElement(webdriver.By.name('btnK')).click();

 // wait  and find iolearn.com link
driver.wait(findIOLearnLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
