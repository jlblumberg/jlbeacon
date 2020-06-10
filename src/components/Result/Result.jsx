import React from 'react';
import { Typography, Card, Grid, CardContent, CardMedia } from '@material-ui/core';
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
      <Typography variant='h5' color='textPrimary' align='center'>Results</Typography>
      <Typography variant='body2' color='textSecondary' align='center' gutterBottom>
        Note: there is a known bug with the transit duration result.
      </Typography>
      <Grid item component={Card} variant='outlined' className={styles.card}>
        <CardMedia
          component="img"
          alt="Sea container vessel"
          height="140"
          src={"https://www.envirotainer.com/4a25f9/contentassets/ba04dfbea2ab4470810f614ccdd7011d/boat-cargo-ocean-above-1066762856-2240x960.jpg"}
          title="Sea container vessel"
        />
        <CardContent>
          <Typography>Distance: {metersToKms(distance)} km</Typography>
          <Typography>Departure: {formatUnixTime(departure)}</Typography>
          <Typography>Transit duration: {formatUnixTime(duration)}</Typography>
          <Typography>Arrival: {formatUnixTime(arrival)} (assumed speed: {roundToTwoDecimals(speed)} km/hour)</Typography>
        </CardContent>
      </Grid>
    </div>
  )
}

export default Result;
