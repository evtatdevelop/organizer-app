import React from "react";
import styles from './month.module.scss';
import ItemDay from "./ItemDay";
import { useSelector, useDispatch } from "react-redux";
import { days, time, getMonth } from "../../organizerSlice";

export const Month = () => { 
  
  const monthDays = useSelector(days)
  const currTime = useSelector(time)
  const dispatch = useDispatch();

  return ( 
    <>
      <button type="button" 
        className={styles.moveBtn}
        onClick = { () => dispatch(getMonth(currTime-31*24*3600000)) }
      >Prev</button>
      <span style={{'marginBottom': '1vw'}}>{new Date(currTime).toLocaleString('en', { month: 'long' })}</span>      
      <ul className={styles.monthList}>
        { monthDays.map( (item) => <ItemDay key = {item.key} item = {item} />) }
      
      </ul>
      <button type="button" 
        className={styles.moveBtn}
        onClick = { () => dispatch(getMonth(currTime+31*24*3600000)) }
      >Next</button>
    </>
  )    
}