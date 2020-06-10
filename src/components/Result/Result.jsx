import React from 'react';

const Result = ({ data }) => {
  const { distance, departure, arrival, duration, speed } = data

  return (
    <div>
      {console.log(data)}
    </div>
  )
}

export default Result;
