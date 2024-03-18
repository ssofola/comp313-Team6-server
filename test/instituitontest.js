const request = require('supertest');
const server = require('../index.js');

describe('Testing Institution endpoints', () => {
    let createdIntId;
    it('Should get all courses', async () => {
        res = await request(server)
        .get('/institutions')
        .expect('Content-Type', /json/)
        .expect(200)
    });

    it('should create an Institution', async () => {
        //In the schema location is an objectID
        const locationId = '65ebca10a9b4a8e24f427558';
        const newInt = {
            fullName: 'Test Institution2',
            abbreviation: 'Test3',
            instCode: 'testcode3',
            location: locationId,
            type: 'test2'
        };
        const response = await request(server)
            .post('/institutions')
            .send(newInt)
            .expect('Content-Type', /json/)
            .expect(201)

            
            createdIntId = response.body._id;
    });

    //
    it('Should update the created Intstitution', async () => {
        const updatedIntData = {
            fullName: 'Test Institution88',
            abbreviation: 'Test88',
            instCode: 'testcode88',
            type: 'test88'
        };
        await request(server)
            .put(`/institutions/${createdIntId}`)
            .send(updatedIntData)
            .expect(203)
    });
    //
    it('Should delete the created institution', async () => {
        await request(server)
            .delete(`/institutions/${createdIntId}`)
            .expect(204)
    })
})