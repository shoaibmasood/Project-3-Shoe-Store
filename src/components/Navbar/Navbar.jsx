import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>MEN</li>
        <li>WOMAN</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Navbar;
