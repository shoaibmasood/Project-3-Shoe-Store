import React from 'react';
import styles from './App.module.css';
import Papper from './components/Papper/Papper';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.container}>
      <Papper />
      <Navbar />
    </div>
  );
}

export default App;
