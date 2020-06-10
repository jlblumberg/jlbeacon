import { metersToKms, formatUnixTime, roundToTwoDecimals } from '../Helpers.js'

describe('Helper functions', () => {

  it('metersToKms converts meters to kms', () => {
    expect(metersToKms(1000)).toEqual(1);
  });

  it('formatUnixTime converts unix time to a readable time', () => {
    expect(formatUnixTime(76189000)).toEqual("Thu, 01 Jan 1970 21:09:49 GMT");
  });

  it('roundToTwoDecimals rounds a long float down to two decimal places', () => {
    expect(roundToTwoDecimals(45.242342342)).toEqual(45.24);
  });

});