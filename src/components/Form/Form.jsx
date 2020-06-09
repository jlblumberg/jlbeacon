import React, { useState } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import styles from './Form.module.css';

const Form = () => {
  const [requestedRoute, setRequestedRoute] = useState({
    startLat: '',
    startLong: '',
    endLat: '',
    endLong: ''
  })

  const handleFieldFill = (e) => {
    const key = e.target.name
    const value = e.target.value
    console.log(key, value, requestedRoute)
    setRequestedRoute({ ...requestedRoute, [key]:value })
  }

  return(
    <form id='route-details-input' className={styles.form}>
      <Typography variant='h5' align='center' gutterBottom>Route Details</Typography>
      <TextField className={styles.textField}
        name="startLat"
        id="outlined-helperText"
        fullWidth
        label="Start Latitude"
        placeholder="00.00000000000000"
        helperText="E.g. 53.53296196255539"
        variant="outlined"
        onChange={(e) => handleFieldFill(e)}
      />
      <TextField className={styles.textField}
        name="startLong"
        id="outlined-helperText"
        fullWidth
        label="Start Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 9.965629577636719"
        variant="outlined"
        onChange={(e) => handleFieldFill(e)}
      />
      <TextField className={styles.textField}
        name="endLat"
        id="outlined-helperText"
        fullWidth
        label="End Latitude"
        placeholder="00.00000000000000"
        helperText="E.g. 51.503039451809734"
        variant="outlined"
        onChange={(e) => handleFieldFill(e)}
      />
      <TextField className={styles.textField}
        name="endLong"
        id="outlined-helperText"
        fullWidth
        label="End Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 0.45069694519042963"
        variant="outlined"
        onChange={(e) => handleFieldFill(e)}
      />
      <div id='route-details-submit' className={styles.submitButton}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => console.log(requestedRoute)}
        >Submit</Button>
      </div>
    </form>
  )
}

export default Form;
