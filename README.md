# Appium-tests
Some standalone appium tests for Demo use, see [my blog](https://blog.joustie.nl/2016/03/24/continuous-integration-with-appium-tests-jenkins-and-saucelabs/) for more information.

These tests are based on the structure used in the official nodejs appium examples. found [here](https://github.com/appium/sample-code/tree/master/sample-code/examples/node).

##TodoMVC Flux example

This example needs the app that is build according to [these](https://blog.joustie.nl/2016/03/24/continuous-integration-with-appium-tests-jenkins-and-saucelabs/) instructions.

###to run tests locally
```
export DEV=true
```

Install appium and start the appium server for your device, please refer to:

http://appium.io  
https://github.com/appium/appium/blob/master/README.md

###to run tests using Sauce Labs cloud

[Sign up here](https://saucelabs.com/home)  
Export the package created for the test using ios-todo-on-sauce-9.2.sh (fill in your saucelabs user and key).  

Configure your environment:

look in ios-todo-on-sauce-9.2.sh and fill in SAUCE_USERNAME and SAUCE_ACCESS_KEY

```
./ios-todo-on-sauce-9.2.sh   
```





