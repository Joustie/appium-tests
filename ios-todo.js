require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    Q = require('q'),
    serverConfigs = require('./helpers/appium-servers');


var Asserter = wd.Asserter; // asserter base class

describe("ios simple", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = process.env.SAUCE ?
      serverConfigs.sauce : serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").ios92);
    desired.app = require("./helpers/apps").iosToDoApp;
    if (process.env.SAUCE) {
      desired.name = 'ios - todo';
      desired.tags = ['appium,test'];
    }
    return driver.init(desired);
  });

  after(function () {
    return driver
      .quit()
      .finally(function () {
        if (process.env.SAUCE) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("should be possible to create a new todo ", function () {
    return driver
	.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]").click()
        .elementByXPath("//UIAApplication[1]/UIAWindow[4]/UIAKeyboard[1]")
	.should.eventually.exist
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]").sendKeys("Test 1 \n")
    	.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[3]")
	.should.eventually.exist
      });

  it("should be possible to create another new todo", function () {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[4]/UIAKeyboard[1]")
	.should.eventually.exist
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]").sendKeys("Test 2 \n")
    	.elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[4]")
	.should.eventually.exist
      });

  it("should be possible to mark the first todo complete", function () {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIASwitch[3]")
	.should.eventually.exist
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIASwitch[3]").click()
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]")
	.should.eventually.exist
      });

  it("should be possible to delete the first todo", function () {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]").click()
      });

  it("should be possible to delete the second todo and make the delete button dissappear", function () {
    return driver
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]").click()
        .elementByXPath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]")
        .then(function() { 
		console.log("found the button");
		throw Error('Delete button is still there, where it should not be!');
	},function rejectedPromise(){
		
		//throw Error('Delete button for entry is not there!');
        })
      });


});

