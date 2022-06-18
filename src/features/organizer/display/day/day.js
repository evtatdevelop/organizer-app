import React from "react";
import styles from './day.module.scss';
import { days, currYear, currMonth, currDay } from "../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";

export const Day = () => {  
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const monthDays = useSelector(days)
  // const date = new Date(year, month , day)

  const dataDay = monthDays.find(item => item.key === `${year}.${month}.${day}`)

// console.log(new Date(dataDay.data[0].date / 1000));

  return ( 
    <>
      <p>{dataDay.dateNumber}</p>
      <p>{dataDay.dayNameLong}</p>
      
      <p>{dataDay.monthName} {year}</p>
      <p>Week {dataDay.weekNumber}</p>
      
      <ul>
        {dataDay.data.map(item => <li key={item.id}>
          {time(item.date)} | 
          {item.name} |
          {item.type} | 
          {item.value}
        </li>)}
      </ul>
    </>
  
  )    
}

const time = (timeStamp) => {
  const date = new Date(+timeStamp)
  return `${date.getHours()}:${date.getMinutes()}` 
}