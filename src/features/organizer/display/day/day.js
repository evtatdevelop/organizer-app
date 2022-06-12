import React from "react";
import styles from './day.module.scss';

export const Day = () => {  
  const date = new Date();
  // const date = new Date(Date.now()-35*24*60*60*1000*4);

  return ( 
    <>
      <span>DAY</span>
      <ul className={styles.dayList}>
        
      </ul>
    </>
  
  )    
}