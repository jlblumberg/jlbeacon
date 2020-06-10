import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './Result.module.css';
import { metersToKms, formatUnixTime, roundToTwoDecimals } from '../../Helpers';

const Result = ({ data }) => {

  if (data.distance === "") {
    return (
      <div id='awaiting-request' className={styles.result}>
        <Typography>
          Please fill in the form and press submit. 
          Note that the results may take a few seconds to load. 
          If nothing loads, please check that you have entered the search parameters correctly.
        </Typography>
      </div>
    )
  }

  const { distance, departure, arrival, duration, speed } = data

  return (
    <div id='results' className={styles.result}>
      Distance: {metersToKms(distance)} km<br/>
      Departure: {formatUnixTime(departure)}<br />
      Transit duration: {formatUnixTime(duration)}<br />
      Arrival: {formatUnixTime(arrival)} (Assumed speed: {roundToTwoDecimals(speed)} km/hour)<br />
    </div>
  )
}

export default Result;
