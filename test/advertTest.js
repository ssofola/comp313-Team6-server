const request = require('supertest');
const server = require('../index.js');

describe('Testing Advert endpoints', () => {
    let createdAdvertId;

    it('should create an Advert', async () => {
        const newAdvert = {
            name: 'Test Advert',
            fromDate: new Date(),
            toDate: new Date()
        };

        const response = await request(server)
            .post('/adverts')
            .send(newAdvert)
            .expect('Content-Type', /json/)
            .expect(201);

        createdAdvertId = response.body._id;
    });

    it('should retrieve the created Advert', async () => {
        await request(server)
            .get(`/adverts/${createdAdvertId}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('should update the created Advert', async () => {
        const updatedAdvertData = {
            name: 'Updated Test Advert',
            fromDate: new Date(),
            toDate: new Date()
        };

        await request(server)
            .put(`/adverts/${createdAdvertId}`)
            .send(updatedAdvertData)
            .expect(203);
    });

    it('should delete the created Advert', async () => {
        await request(server)
            .delete(`/adverts/${createdAdvertId}`)
            .expect(204);
    });
});
