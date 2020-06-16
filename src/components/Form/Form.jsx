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

  useEffect(() => {
    setIsSubmitDisabled(
      requestedRoute.startLat === '' ||
      requestedRoute.startLong === '' ||
      requestedRoute.endLat === '' ||
      requestedRoute.endLong === ''
    );
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

  const textFieldDetails = [
    { name: 'startLat', value: requestedRoute.startLat, label: "Start Latitude", helperText: "E.g. 53.53296196255539" },
    { name: 'startLong', value: requestedRoute.startLong, label: "Start Longitude", helperText: "E.g. 9.965629577636719" },
    { name: 'endLat', value: requestedRoute.endLat, label: "End Latitude", helperText: "E.g. 51.503039451809734" },
    { name: 'endLong', value: requestedRoute.endLong, label: "End Longitude", helperText: "E.g. 0.45069694519042963" }
  ];

  const populateTextFields = () => {
    return textFieldDetails.map((field, i) => (
      <TextField
        className={styles.textField}
        key={i}
        name={field.name}
        id="outlined-helperText"
        value={field.value}
        fullWidth
        label={field.label}
        placeholder="00.00000000000000"
        helperText={field.helperText}
        variant="outlined"
        onChange={(e) => handleFieldFill(e)}
      />
    ));
  }

  return(
    <form id='route-details-input' className={styles.form}>
      <Typography variant='h5' color='textPrimary' align='center'>Route details</Typography>
      <Typography variant='body1' color='textSecondary' align='center' gutterBottom>
        All fields are required. Longitude should be between -180 and 180, and latitude between -90 and 90.
      </Typography>
      {populateTextFields()}
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
