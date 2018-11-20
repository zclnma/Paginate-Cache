import React from 'react'

import styles from './Error.module.css';

const Error = (props) => {
  return (
    <div className={styles.error}>
      <p>This page can't be loaded now, please try again later</p>
      <button style={{color: 'blue'}} onClick={props.clicked}>Try Again</button>
    </div>
  )
}

export default Error;
