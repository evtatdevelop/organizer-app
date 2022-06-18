import React, { useState } from "react";
import styles from './month.module.scss';
import ItemDay from "./ItemDay";
import { useSelector, useDispatch } from "react-redux";
import { days, currYear, currMonth, currDay, getMonth } from "../../organizerSlice";
import { moneyFormat } from "../../../../helpers";

export const Month = () => { 
  const dispatch = useDispatch()
  const monthDays = useSelector(days)
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const date = new Date(year, month , day)

  const [direction, setDirection] = useState(null);

  const prev = () => {
    dispatch(getMonth(new Date(year, month - 1, 1, 0 ).getTime()));
    setDirection('prev');
  }
  const next = () => {
    dispatch(getMonth(new Date(year, month + 1, 1, 0 ).getTime()));
    setDirection('next');
  }

  const profit = getMonthSumm(monthDays, 'profit');
  const costs = getMonthSumm(monthDays, 'costs');

  return ( 
    <>
      <button type="button" 
        className={styles.moveBtn}
        onClick = { () => prev() }
      >Prev</button>
      
      <span className={styles.header}>
        <span>{date.toLocaleString('en', { month: 'long' })} {year}</span> 
        <span className={styles.sums}>
          <span className={styles.sumProfits}>+{profit}</span>
          <span className={styles.sumCosts}>-{costs}</span>
        </span>
      </span>
      
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

const getMonthSumm = (dayArr, mode) => moneyFormat(
  dayArr.reduce((sum, curr) => 
    curr.data 
    ? sum + curr.data.filter(item => item.type === mode).reduce((sum, event) => sum + +event.value, 0)
    : sum
  , 0)
)