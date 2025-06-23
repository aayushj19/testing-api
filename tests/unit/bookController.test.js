import { jest } from '@jest/globals';
import { getBooks } from '../../controller/bookController.js';
import Book from '../../model/Book.js';

// ✅ This just marks the module as mockable
jest.mock('../../model/Book.js');

describe('getBooks', () => {
  it('should return list of books', async () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    const mockBooks = [{ title: 'Test Book' }];

    // ✅ Manually mock the static .find method
    Book.find = jest.fn().mockResolvedValue(mockBooks);

    await getBooks(req, res);

    expect(res.json).toHaveBeenCalledWith(mockBooks);
  });
});
