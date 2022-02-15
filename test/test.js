var request = require('supertest'); // get the test package
var app = require('../server.js'); // get the code being tested
describe('GET /', function() {
it('respond with Large Systems Java Application for St2 - version-10!!', function(done) {
//navigate to root and check the the response is "Large Systems Java Application for St2 - version-10!!"
request(app).get('/').expect('<h1 style="color:green;">Large Systems Java Application for St2 - version-10!!</h1> \n', done); // expected test response
process.exit();
});
});

