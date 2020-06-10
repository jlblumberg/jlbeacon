export const metersToKms = (meters) => {
  const result = Math.floor((meters/1000) * 100) / 100
  return result
}

export const formatUnixTime = (unixTime) => {
  const date = new Date(unixTime)
  const result = date.toUTCString();
  return result
}

export const roundToTwoDecimals = (longFloat) => {
  const result = Math.floor(longFloat* 100) / 100
  return result
}