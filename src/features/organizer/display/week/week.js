import React from "react";
import styles from './week.module.scss';

export const Week = () => {  
  const date = new Date();
  // const date = new Date(Date.now()-35*24*60*60*1000*4);

  return ( 
    <>
      <span>WEEK</span>
      <ul className={styles.weekList}>
        {date.toDateString()}
      </ul>
    </>
  
  )    
}