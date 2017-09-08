// require('chromedriver');
require('geckodriver');
var webdriver =  require('selenium-webdriver');
var By =  webdriver.By;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

var website = 'https://nodejs.org/en/'

driver.get(website).then(function(){
	console.log('\n Jasmine loaded', website)
});

driver.sleep(5000);

// npm i jasmine -g
// jasmine init
// jasmine spec/server.js
describe('\n Node.js Website Test', function(){

  it('should check page title', function(done){
	  var pageTitle = driver.findElement(webdriver.By.tagName('title'));
	  pageTitle.getInnerHtml().then(function(title){
		  expect(title).toBe('Node.js')
		  done();
	  });
  });

  it('should check Node.js version',  function(done){
	  var button =  driver.findElement(webdriver.By.className('home-downloadbutton'));
	  button.getAttribute('title').then(function(title){
		  expect(title).toContain('4.2');
		  done();
	  });
  });

});
