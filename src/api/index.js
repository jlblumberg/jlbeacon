import axios from 'axios';

const config = { headers: { 'x-api-key': process.env.REACT_APP_SEA_API_KEY, 'X-Requested-With': 'XMLHttpRequest' } };
const startLong = '9.965629577636719'
const startLat = '53.53296196255539'
const endLong = '0.45069694519042963'
const endLat = '51.503039451809734'
const url = `https://cors-anywhere.herokuapp.com/https://api.searoutes.com/route/v2/sea/${startLong},${startLat};${endLong},${endLat}`

export const fetchData = async () => {
  try {
    const response = await axios.get(url, config)
    const { distance, departure, arrival, duration, speed } = response.data.features[0].properties
    return { distance, departure, arrival, duration, speed }
  } catch (error) {
    return new Error(error)
  };
};