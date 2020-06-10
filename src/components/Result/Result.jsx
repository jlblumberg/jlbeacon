import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './Result.module.css';

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
      {distance}
    </div>
  )
}

export default Result;
