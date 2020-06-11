export const metersToKms = (meters) => {
  const result = Math.floor((meters/1000) * 100) / 100;
  return result;
}

export const formatUnixTime = (unixTime) => {
  const date = new Date(unixTime);
  const result = date.toUTCString();
  return result;
}

export const roundToTwoDecimals = (longFloat) => {
  const result = Math.floor(longFloat* 100) / 100;
  return result;
}

export const convertDuration = (millisecondDuration) => {
  let day, hour, minute, seconds;
  seconds = Math.floor(millisecondDuration / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return `${day} days, ${hour} hours, and ${minute} minutes`
}
