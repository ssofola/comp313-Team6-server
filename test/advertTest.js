const request = require('supertest');
const server = require('../index.js'); // Make sure to replace '../index.js' with the correct path to your server file

describe('Testing advert endpoints', () => {
    let createdAdvertId;

    it('should create an advert', async () => {
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

    it('should retrieve the created advert', async () => {
        await request(server)
            .get(`/adverts/${createdAdvertId}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('should update the created advert', async () => {
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

    it('should delete the created advert', async () => {
        await request(server)
            .delete(`/adverts/${createdAdvertId}`)
            .expect(204);
    });
});
