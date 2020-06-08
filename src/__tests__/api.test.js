import axios from 'axios'
import { fetchData } from '../api/index';
import mockResponse from '../__mocks__/mockResponse.json';
import mockHandledResponse from '../__mocks__/mockHandledResponse.json';
jest.mock('axios');

describe('fetchData', () => {

  it('can handle fetching data correctly', async () => {
    axios.get.mockResolvedValue(mockResponse);
    const response = await fetchData();
    await expect(response).toEqual(mockHandledResponse)
  });

});