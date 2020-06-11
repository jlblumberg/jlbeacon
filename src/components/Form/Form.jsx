import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import styles from './Form.module.css';

const Form = ({handleSubmit}) => {
  const [requestedRoute, setRequestedRoute] = useState({
    startLat: '',
    startLong: '',
    endLat: '',
    endLong: ''
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateForm = () => {
    setIsSubmitDisabled(
      requestedRoute.startLat === '' ||
      requestedRoute.startLong === '' ||
      requestedRoute.endLat === '' ||
      requestedRoute.endLong === ''
      );
  }

  useEffect(() => {
    validateForm();
  }, [requestedRoute]);

  const handleFieldFill = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setRequestedRoute({ ...requestedRoute, [key]:value });
  }

  const clearFormAndState = () => {
    setIsSubmitDisabled(true);
    setRequestedRoute({
      startLat: '',
      startLong: '',
      endLat: '',
      endLong: ''
    });
  }

  return(
    <form id='route-details-input' className={styles.form}>
      <Typography variant='h5' color='textPrimary' align='center'>Route details</Typography>
      <Typography variant='body1' color='textSecondary' align='center' gutterBottom>
        All fields are required. Longitude should be between -180 and 180, and latitude between -90 and 90.
      </Typography>
      <TextField className={styles.textField}
        name="startLat"
        id="outlined-helperText"
        value={requestedRoute.startLat}
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
        value={requestedRoute.startLong}
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
        value={requestedRoute.endLat}
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
        value={requestedRoute.endLong}
        fullWidth
        label="End Longitude"
        placeholder="00.00000000000000"
        helperText="E.g. 0.45069694519042963"
        variant="outlined"
        onChange={(e) => handleFieldFill(e)}
      />
      <div id='route-details-submit' className={styles.submitButton}>
        <Button
          name="submit-button"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitDisabled}
          onClick={() => { handleSubmit(requestedRoute); clearFormAndState(); }}
        >Submit</Button>
      </div>
    </form>
  );
}

export default Form;
