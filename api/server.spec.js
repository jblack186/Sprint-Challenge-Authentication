const request = require('supertest');
const server = require('./server.js');

describe('the register', () => {
    describe('POST /register', () => {
        it('should return status 201', () => {
            return request(server)
            .post('/register')
            .then(res => {
                expect(res.status).toBe(201);
            })
        });
    })
})