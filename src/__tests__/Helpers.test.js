import { metersToKms, formatUnixTime } from '../Helpers.js'

describe('Helper functions', () => {

  it('metersToKms converts meters to kms', () => {
    expect(metersToKms(1000)).toEqual(1);
  });

  it('formatUnixTime converts unix time to a readable time', () => {
    expect(formatUnixTime(1549312452)).toEqual("20:34:12");
  });

});