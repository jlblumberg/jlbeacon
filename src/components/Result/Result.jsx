import React from 'react';

const Result = ({ data }) => {

  if (data.distance === "") {
    return (
      <div id='awaiting-request'>Please fill in the form and press submit</div>
    )
  }
  
  const { distance, departure, arrival, duration, speed } = data

  return (
    <div id='results'>
      {distance}
    </div>
  )
}

export default Result;
