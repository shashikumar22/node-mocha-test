const request = require('supertest');
var expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return  Hello World!', (done) => {
			request(app)
				.get('/')
				.expect(400)
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'cannot find page'
					})
				})
				.end(done)
		});
	})


	describe('GET /users', () => {
		it('should return user response object', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: "Andrew Mead",
						age: 27,
						location: "London"
					});
				})
				.end(done);
		})
	})
})


