import { metersToKms } from '../Helpers.js'

describe('Helper functions', () => {

  it('metersToKms converts meters to kms', () => {
    expect(metersToKms(1000)).toEqual(1);
  });

});