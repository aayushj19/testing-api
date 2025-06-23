import app from '../../index.js'; // your Express app
import request from 'supertest';
import mongoose from 'mongoose';
import Book from '../../model/Book.js';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Book.deleteMany();
});

describe('Books API', () => {
  it('should create a book', async () => {
    const res = await request(app)
      .post('/books')
      .send({ title: 'Book 1', author: 'Aayush' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Book 1');
  });

  it('should fetch all books', async () => {
    await Book.create({ title: 'Book A', author: 'Aayush' });

    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});
