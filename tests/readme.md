## testing
In this repo there are unit tests which test the business logic of the form. This allows us to develop this application better and make shure every use case works.

For testing we use [jest](http://jestjs.io/) and [@testing-library/react](https://stackoverflow.com/a/74019619/15070611). We use @tesing-libary because it is much more powerfull then react-test-renderer and compared to enzyme it's not dead.

For mocking of fetch we use [jest-fetch-mock](https://github.com/jefflau/jest-fetch-mock) because we are lazy it also allows us to mock the response of multible api endpoints.

## folders
Because with gravityforms you can do alot of things such as conditional form logic and custom confirmation pages. We devide these features in their own folder like this

#### ./sampleTests
This test is to see if a simple newsletter signup form renders correctly with all the fields.

#### ./conditionalLogicTests
This tests checks if the conditional logic works in a form




## todo's 
there still need to be test cases written for the following scenario's: 
- conditional logic: show field if any match
- conditional logic: hide field if any match
- conditional logic: hide field if all match
- conditional logic: show field if all match
- confirmations: confirmation redirect to url
- confirmations: confirmation page redirect to url
- confirmations: custom confirmation page if field matches value