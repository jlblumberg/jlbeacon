import axios from 'axios';

const config = { headers: { 'x-api-key': process.env.REACT_APP_SEA_API_KEY } };
const startLong = '9.965629577636719'
const startLat = '53.53296196255539'
const endLong = '0.45069694519042963'
const endLat = '51.503039451809734'
const url = `https://api.searoutes.com/route/v2/sea/${startLong},${startLat};${endLong},${endLat}`

export const fetchData = async () => {
  try {
    const response = await axios.get(url, config)
    const data = response.features[0].properties
    const selectData = { 
      distance: data.distance, 
      departure: data.departure,
      arrival: data.arrival,
      duration: data.duration,
      speed: data.speed,  
    }
    return selectData;
  } catch (error) {
    return new Error(error)
  };
};