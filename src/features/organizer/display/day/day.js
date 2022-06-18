import React from "react";
import styles from './day.module.scss';
import { currYear, currMonth, currDay } from "../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";

export const Day = () => {  
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const date = new Date(year, month , day)

  return ( 
    <>
      <span>{ `${year} ${month} ${day}` }</span>

    </>
  
  )    
}