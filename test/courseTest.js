const request = require('supertest');
const server = require('../index.js');

describe('Testing Course endpoints', () => {
    let createdCourseId;

    it('should create a Course', async () => {
        const newCourse = {
            courseName: 'Test Course',
            courseCode: 'Test101',
            institutionId: '65ebcb4eb32d09690e1da519'
        };

        const response = await request(server)
            .post('/courses')
            .send(newCourse)
            .expect('Content-Type', /json/)
            .expect(201);

            createdCourseId = response.body._id;
    });

    it('should retrieve the created Course', async () => {
        await request(server)
            .get(`/courses/${createdCourseId}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('should update the created Course', async () => {
        const updatedCourseData = {
            courseName: 'Updated Test Course',
            courseCode: 'UpdatedTest101',
            institutionId: '65ebcb4eb32d09690e1da519'
        };

        await request(server)
            .put(`/courses/${createdCourseId}`)
            .send(updatedCourseData)
            .expect(203);
    });

    it('should delete the created Course', async () => {
        await request(server)
            .delete(`/courses/${createdCourseId}`)
            .expect(204);
    });
});
