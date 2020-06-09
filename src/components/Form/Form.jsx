import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import styles from './Form.module.css';

const Form = () => {
  return(
    <Grid container spacing={3}>
    <form id='route-details-input' className={styles.form}>
      <Typography variant='h5' gutterBottom>Route Details</Typography>
      <TextField className={styles.textField}
        id="outlined-helperText"
        label="Start Latitude"
        placeholder="00.00000000000000"
        helperText="E.g. 53.53296196255539"
        variant="outlined"
      />
      <TextField className={styles.textField}
        id="outlined-helperText"
        label="Start Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 9.965629577636719"
        variant="outlined"
      />
      <TextField className={styles.textField}
        id="outlined-helperText"
        label="End Latitude"
        placeholder="00.00000000000000"
        helperText="E.g. 51.503039451809734"
        variant="outlined"
      />
      <TextField className={styles.textField}
        id="outlined-helperText"
        label="End Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 0.45069694519042963"
        variant="outlined"
      />
    </form>
    </Grid>
  )
}

export default Form;
