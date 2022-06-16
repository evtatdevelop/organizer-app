import React, { useState } from "react";
import styles from './month.module.scss';
import ItemDay from "./ItemDay";
import { useSelector, useDispatch } from "react-redux";
import { days, time, getMonth } from "../../organizerSlice";

export const Month = () => { 
  
  const monthDays = useSelector(days)
  const currTime = useSelector(time)
  const dispatch = useDispatch();

  const date = new Date(currTime)
  const year = date.getFullYear();
  const month = date.getMonth();

  const [direction, setDirection] = useState(null);


  const prev = () => {
    dispatch(getMonth(new Date(year, month - 1, 1, 0 ).getTime()));
    setDirection('prev');
  }
  const next = () => {
    dispatch(getMonth(new Date(year, month + 1, 1, 0 ).getTime()));
    setDirection('next');
  }

  return ( 
    <>
      <button type="button" 
        className={styles.moveBtn}
        onClick = { () => prev() }
      >Prev</button>
      <span style={{'marginBottom': '1vw'}}>{new Date(currTime).toLocaleString('en', { month: 'long' })}</span>      
      <ul className={styles.monthList}>
        { monthDays.map( (item) => <ItemDay key = {item.key} item = {item} direction = {direction}/>) }
      
      </ul>
      <button type="button" 
        className={styles.moveBtn}
        onClick = { () => next() }
      >Next</button>
    </>
  )    
}

