import React from "react";
import styles from './month.module.scss';
import ItemDay from "./ItemDay";

export const Month = () => {  
  const date = new Date();
  // const date = new Date(Date.now()-35*24*60*60*1000*4);

  let monthList = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthDays = getMonthDays(year, month);
  let day =  new Date(year, month, 1).getDay();
  if ( day > 0 ) while ( day-- > 1 ) monthList.push({'key': Math.random(),});
  monthList = [...monthList, ...monthDays]

  return ( 
    <>
      <span style={{'marginBottom': '1vw'}}>{date.toLocaleString('en', { month: 'long' })}</span>      
      <ul className={styles.monthList}>
        { monthList.map( item => <ItemDay key = {item.key} item = {item} /> ) }
      </ul>    
    </>
  )    
}


const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1),
        onejan = new Date(year,0,1), onejanDay = onejan.getDay(),
        result = [];
  while ( date.getMonth() === month ) {
    const dateNumber = date.getDate(),
          key = `${year}.${month}.${dateNumber}`,
          day = date.getDay(),
          dayName = date.toLocaleString('en', { weekday: 'long' }),
          startDayTime = date.getTime(),
          endDayTime = startDayTime + 86399999,
          weekNumber = Math.ceil((((date - onejan) / 86400000) + onejanDay ) / 7) - Math.floor(onejanDay / 4);
    result.push({key, dateNumber, day, dayName, startDayTime, endDayTime, weekNumber}); 
    date.setDate(dateNumber + 1);
  }
  // console.log(result);
  return result;
}