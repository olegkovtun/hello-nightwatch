module.exports = {
  'STEP ONE: Log In' : function (browser) {
    browser
      .url('https://demoapp.strongqa.com/users/sign_in')
	  .waitForElementVisible('input[id=user_email]', 1000)
	  .setValue('input[type=email]', 'ballisticman@gmail.com')
	  .setValue('input[type=password]', '12345678')
	  .click('input[type=submit]')
	  .pause(2000)
	  .assert.containsText('header', 'LOGOUT')
  },

  'STEP TWO: Log Out' : function (browser) {
    browser
      .url('https://demoapp.strongqa.com')
	  //.waitForElementVisible('ul[class=navigation__menu]', 1000)
	  .waitForElementVisible('body', 1000)
	  .assert.containsText('header', 'LOGOUT')
	  .useXpath()     // every selector now must be XPath
	  .click("//a[text()='Logout']")
	  .useCss()      //back to CSS now
	  .pause(2000)
	  .assert.containsText('header', 'LOGIN')
	  
	  .end();
  }
  
}
