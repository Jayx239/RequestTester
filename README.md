# RequestTester
##### A node.js application for testing http clients. This application was designed to be used for testing of the BrowseSharp client and is used for unit test purposes in that project. You can find [BrowseSharp](https://github.com/Jayx239/BrowseSharp "BrowseSharp") on my github page.
###Features
The application has end points that return request headers, formdata, and cookies in json format or in an html template that can be parsed to check proper http attributes are being sent.

### Requirements
This application requires node.js to be installed.

### Installing
1. Navigate to the root directory (RequestTest/)
2. Run install command 
	* ``npm install``

### Starting the application
1. Navigate to the root directory (RequestTest/)
2. Run start command
	* `` npm start ``

### Using the appication
To use the application make post or get requests to one of the following end points:
* http://localhost:3000/tester
	* Returns json response containing headers, cookies, and formdata (if post request) or query parameters (if get request)
* http://localhost:3000/tester/view
	* Returns html view containing headers, cookies, and formdata (if post request) or query parameters (if get request) where each li element has an id which is the key of the request(ie: cookie name) and the innertext is the value. Therefore you can access these elements with css id query (ie: #cookie_name).