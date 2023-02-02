import { createTableQuery, dropTableQuery } from './seed_testdb';
import '@testing-library/jest-dom/extend-expect';
import postController from '../../server/controllers/postController';
const dotenv = require('dotenv').config();
const db = require('../../server/models/model.js');
const request = require('supertest');
const assert = require('assert');

//ATTENTION must set connection string in model.js file to empy database instance before running tests

let server = 'http://localhost:3000';

describe('integration tests', () => {
  beforeAll(async () => {
    await db.query(createTableQuery);
  });

  afterAll(async () => {
    await db.query(dropTableQuery);
    await db.close();
  });

  describe('/bulletin', () => {
    describe('GET', () => {
      it('responds with 200 status and /application/json/ content type', () => {
        return request(server)
          .get('/bulletin')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
      it('responds with all the data within our database', () => {
        return request(server)
          .get('/bulletin')
          .then((res) => {
            expect(res.body.length).toBe(3);
          });
      });
    });
  });

  describe('/filter', () => {
    describe('GET', () => {
      it('responds with 200 status and /application/json/ content type', () => {
        return request(server)
          .get('/filter')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
      it('it only returns posts filtered by location (zip code)', () => {
        return request(server)
          .get('/filter?location=11779')
          .then((res) => {
            expect(res.body[0]).toEqual({
              _id: 1,
              email: '123@gmail.com',
              first_name: 'Juliana',
              last_name: 'Morrelli',
              item_lost: 'iphone',
              item_description: 'iphone 12 blue case',
              location: '11779',
            });
          });
      });
    });
  });

  describe('/userPosts', () => {
    describe('GET', () => {
      it('responds with 200 status and /application/json/ content type', () => {
        return request(server)
          .get('/userPosts')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
      it('it only returns posts submitted from one user', () => {
        return request(server)
          .get('/userPosts?email=123@gmail.com')
          .then((res) => {
            expect(res.body[0]).toEqual({
              _id: 1,
              email: '123@gmail.com',
              first_name: 'Juliana',
              last_name: 'Morrelli',
              item_lost: 'iphone',
              item_description: 'iphone 12 blue case',
              location: '11779',
            });
          });
      });
    });
  });

  describe('/createPost', () => {
    describe('POST', () => {
      it('responds with 200 status and /application/json/ content type', () => {
        return request(server)
          .get('/filter')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
      it('creates a new row(post) in our database', () => {
        return request(server)
          .post('/createPost')
          .send({
            email: '228@gmail.com',
            first_name: 'Julie',
            last_name: 'Morrelli',
            item_lost: 'sweater',
            item_description: 'striped sweater',
            location: '12775',
          })
          .then((res) => {
            expect(res.body.allPosts).toEqual({
              _id: 4,
              email: '228@gmail.com',
              first_name: 'Julie',
              last_name: 'Morrelli',
              item_lost: 'sweater',
              item_description: 'striped sweater',
              location: '12775',
            });
          });
      });
    });
  });
});
