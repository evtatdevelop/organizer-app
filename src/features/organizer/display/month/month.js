import React, { useState } from "react";
import styles from './month.module.scss';
import ItemDay from "./ItemDay";
import { useSelector, useDispatch } from "react-redux";
import { days, currYear, currMonth, currDay, getMonth } from "../../organizerSlice";
import { moneyFormat } from "../../../../helpers";
import { rates } from "../../../commonAPI/commonSlice";

export const Month = () => { 
  const dispatch = useDispatch()
  const monthDays = useSelector(days)
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const currencies = useSelector(rates)
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

  // console.log(curencies);

  const profit = getMonthSumm(monthDays, 'profit', currencies);
  const costs = getMonthSumm(monthDays, 'costs', currencies);

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

const getMonthSumm = (dayArr, mode, currencies) => {
  const sum = 
    dayArr.reduce((sum, curr) => 
      curr.data 
      ? sum + curr.data.filter(item => item.type === mode).reduce((sum, event) => {
        let rate = 1;
        if ( event.currency !== 'RUB' ) {
          const currency = currencies.find(item => item.code === event.currency)
          rate = currency.inverseRate;
        }
        return sum + +event.value * rate
      }, 0)
      : sum
    , 0)
  return moneyFormat( Math.round(sum) )
}