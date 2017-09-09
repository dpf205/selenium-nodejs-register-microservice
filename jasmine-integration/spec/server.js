// require('chromedriver');
// npm i jasmine -g
// jasmine init
// jasmine spec/server.js

require('geckodriver');
var webdriver =  require('selenium-webdriver');
var By =  webdriver.By;

var count = 0;
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.manage().deleteAllCookies();

var website = 'https://nodejs.org/en/'


driver.get(website).then(function(){
	console.log('\n Jasmine test loaded for ', website)
});

describe('\n nodejs.org/en/ front end tests', function(){

  it('should check page title', function(done){

	 var pageTitle = driver.findElement(webdriver.By.tagName('title'));
	 pageTitle.getText().then(function(title){
		expect(title).toBe('Node.js')
		done();
	});
  });

  it('should check Node.js version', function(done){
   var button =  driver.findElement(webdriver.By.className('home-downloadbutton'));
   button.getAttribute('title').then(function(title){
	   expect(title).toContain('6');
   	   done();
   });

   });
});

beforeEach(function(){
	count++;
	return  console.log('Test number', count);
})
