import axios from 'axios';


export const fetchData = async (requestDetails) => {

  const config = { headers: { 'x-api-key': process.env.REACT_APP_SEA_API_KEY, 'X-Requested-With': 'XMLHttpRequest' } };
  const { startLong, startLat, endLong, endLat } = requestDetails
  const url = `https://cors-anywhere.herokuapp.com/https://api.searoutes.com/route/v2/sea/${startLong},${startLat};${endLong},${endLat}`
  
  try {
    const response = await axios.get(url, config)
    const { distance, departure, arrival, duration, speed } = response.data.features[0].properties
    return { distance, departure, arrival, duration, speed }
  } catch (error) {
    return new Error(error)
  };
};