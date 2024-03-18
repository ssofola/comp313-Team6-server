const request = require('supertest');
const server = require('../index.js');
// Run with npm test
//describe is the test suite, "it" are the test cases
describe('Testing the test suite', () => {
    let userId;
    it('getting users', async() => {
        await request(server)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('creating a new user', async() =>{
        const user = {
            email: 'test@test.com5',
            fullName: 'Testy McTester5',
            password: 'testpassword5',
            userType: 'testtype5'
        };
        const response = await request(server)
            .post('/users')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(201)// 201 is the success code for post

            userId = response.body._id;
    });
    it('updating a user by id', async() => {
        const user = {
            email: 'updated@test.com',
            fullName: 'updated tester',
            userType: 'updated type'
        };
     
        await request(server)
        .put(`/users/${userId}`)
        .send(user)
        .expect(203)
    });

    it('deleting a user by id', async() => {
        await request(server)
            .delete(`/users/${userId}`)
            .expect(204)
    });
});
