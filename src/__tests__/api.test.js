import axios from 'axios'
import { fetchData } from '../api/index';
import mockResponse from '../__mocks__/mockResponse.json';
import mockRequestDetails from '../__mocks__/mockRequestDetails.json';
import mockBadRequestDetails from '../__mocks__/mockBadRequestDetails.json';
import mockHandledResponse from '../__mocks__/mockHandledResponse.json';
jest.mock('axios');

describe('fetchData', () => {

  it('can handle fetching data correctly', async () => {
    axios.get.mockResolvedValue(mockResponse);
    const response = await fetchData(mockRequestDetails);
    await expect(response).toEqual(mockHandledResponse);
  });

  it('can handle an erroneous response', async () => {
    axios.get.mockRejectedValue('error message');
    const rejectedResponse = await fetchData(mockBadRequestDetails);
    await expect(rejectedResponse).toEqual(new Error('error message'));
  });

});