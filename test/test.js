const request = require('supertest');
const server = require('../index.js');
// Run with npm test
//describe is the test suite, "it" are the test cases
describe('Testing the test suite', () => {
    it('getting users', async() => {
        await request(server)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200);
    });
    // As of right now we can only delete by id, 
    // so it would be wise to change the json here when you want to test for now
    it('creating a new user', async() =>{
        const user = {
            email: 'test@test.com5',
            fullName: 'Testy McTester5',
            password: 'testpassword5',
            userType: 'testtype5'
        };
        await request(server)
            .post('/users')
            .send(user)
            .expect('Content-Type', /json/)
            .expect(201)// 201 is the success code for post
    });
    // This would also have to be changed everytime you want to run this test case, 
    //all the ids are randomly generated and I couldn't figure out how to give a specific id when posting
    it('deleting a user by id', async() => {
        const id = '65f7d1b9d7e41290d92a323b';
        await request(server)
            .delete(`/users/${id}`)
            .expect(204)
    });
    it('updating a user by id', async() => {
        const user = {
            email: 'updated@test.com',
            fullName: 'updated tester',
            userType: 'updated type'
        };
        const id = '65f7d404540c92093699cd2b';
        await request(server)
        .put(`/users/${id}`)
        .send(user)
        .expect(203)
    });
});
