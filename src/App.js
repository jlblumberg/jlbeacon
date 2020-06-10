import React from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import { useState } from 'react';
import { fetchData } from './api/index';

function App() {

  const [routeResults, setRouteResults] = useState({
      distance: '',
      departure: '',
      arrival: '',
      duration: '',
      speed: ''
  });

  const handleSubmit = async (requestDetails) => {
    const { distance, departure, arrival, duration, speed } = await fetchData(requestDetails);
    setRouteResults({ distance, departure, arrival, duration, speed });
  }

  return (
    <div className={styles.container}>
      <Form handleSubmit={handleSubmit}/>
      <Result data={routeResults}/>
    </div>
  );
}

export default App;
