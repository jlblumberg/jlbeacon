import React from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import styles from './Form.module.css';

const Form = () => {
  return(
    <form id='route-details-input' className={styles.form}>
      <Typography variant='h5' align='center' gutterBottom>Route Details</Typography>
      <TextField className={styles.textField}
        id="outlined-helperText"
        fullWidth
        label="Start Latitude"
        placeholder="00.00000000000000"
        helperText="E.g. 53.53296196255539"
        variant="outlined"
      />
      <TextField className={styles.textField}
        id="outlined-helperText"
        fullWidth
        label="Start Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 9.965629577636719"
        variant="outlined"
      />
      <TextField className={styles.textField}
        id="outlined-helperText"
        fullWidth
        label="End Latitude"
        placeholder="00.00000000000000"
        helperText="E.g. 51.503039451809734"
        variant="outlined"
      />
      <TextField className={styles.textField}
        id="outlined-helperText"
        fullWidth
        label="End Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 0.45069694519042963"
        variant="outlined"
      />
      <div id='route-details-submit' className={styles.submitButton}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >Submit</Button>
      </div>
    </form>
  )
}

export default Form;
