Feature: UserLists

  Scenario: Get UserList
    Given url 'https://reqres.in/api/users?page=2'
    * configure ssl = true
    * print 'myVarName value is', myVarName
    * print 'user type is :' , userType
    * print dummyURL
    And header Content-Type = 'application/json'
    When method get
    Then status 200