var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

driver.get("http://losangeles.backpage.com")


driver.findElements(".resultsSectionLabel").then(function(links){
  console.log(links)
});