const request = require('supertest');
const server = require('./server.js');
const db = require('../database/dbConfig.js');

describe('server', ()=> {
    it('test is running', () => {
        expect(process.env.DB_ENV). toBe('testing');
    })
})
    describe('POST /register', () => {
        beforeEach(async () => {
            await db('users').truncate(); // guarantees table is cleaned out before any test run
        })
            it('should return 1 for body', () => {
                return request(server)
                .post('/api/auth/register')
                .send({
                    username: 'jffck',
                    password: 'ygdw'
                })
                .then(res => {
                    expect(res.body.length).toBe(0);
                })
                })
        
       
        });

    describe('POST /register', async () => {
        it('should return status 201', () => {
            return request(server)
            .post('/api/auth/register')
            .send({
                username: 'jafffdfck',
                password: 'yfefdgfp'
            })
            .then(res => {
                expect(res.status).toBe(201);
            })
            })
        });

        describe('POST /register', () => {
            beforeEach(async () => {
                await db('users').truncate(); // guarantees table is cleaned out before any test run
            })
                it('should return 1 for body', () => {
                    return request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'jffck',
                        password: 'ygdw'
                    })
                    .then(res => {
                        expect(res.body.length).toBe(0);
                    })
                    })
            
           
            });
    
        describe('POST /login', async () => {
            it('should return status 201', () => {
                return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'jafffdfck',
                    password: 'yfefdgfp'
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
                })
            });

        


   
    