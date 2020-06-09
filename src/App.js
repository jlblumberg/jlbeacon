import React from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result';


function App() {
  return (
    <div className={styles.container}>
      <Form/>
      <Result/>
    </div>
  );
}

export default App;
