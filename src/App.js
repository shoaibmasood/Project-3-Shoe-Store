import React from 'react';
import styles from './App.module.css';
import Papper from './components/Papper/Papper';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Papper />
      </div>
    </Router>
  );
}

export default App;
