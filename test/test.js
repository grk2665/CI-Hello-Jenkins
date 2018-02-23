var request = require ('supertest');

var app = require('../app.js');

describe('GET /', function() {
	it('respond with helloworld' , function(done){
		request(app).get('/').expect('hello world' , done);
	});
});