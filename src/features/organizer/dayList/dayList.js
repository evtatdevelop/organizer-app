import React from "react";
import styles from './dayList.module.scss';
import ItemDay from "./ItemDay";

export const DayList = () => {  
  const date = new Date();
  // const date = new Date(Date.now()-35*24*60*60*1000*4);

  const year = date.getFullYear();
  const month = date.getMonth();
  const monthDays = getMonthDays(year, month);

  const gapDays = [];
  let day =  new Date(year, month, 1).getDay();
  if ( day > 0 ) while ( day-- > 1 ) gapDays.push({'key': Math.random(),});

  return (
    <>
      <span style={{'marginBottom': '1vw'}}>{date.toLocaleString('en', { month: 'long' })}</span>
      <ul className={styles.dayList}>
        { gapDays.map( item => <ItemDay key = {item.key} item = {item} /> ) }
        { monthDays.map( item => <ItemDay key = {item.key} item = {item} /> ) }
      </ul>    
    </>
  )    
}


const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1),
        result = [];
  while ( date.getMonth() === month ) {
    const thisYear = date.getFullYear(),
          thisMonth = date.getMonth(),
          thisDate = date.getDate(),
          onejan = new Date(thisYear,0,1),
          key = `${thisYear}.${thisMonth}.${thisDate}`,
          dateNumber = thisDate,
          day = date.getDay(),
          dayName = date.toLocaleString('en', { weekday: 'long' }),
          startDayTime = date.getTime(),
          endDayTime = startDayTime + 24*60*60*1000-1,
          weekNumber = Math.ceil((((date - onejan) / 86400000) + onejan.getDay() ) / 7) - Math.floor(onejan.getDay()/4);
    result.push({key, dateNumber, day, dayName, startDayTime, endDayTime, weekNumber}); 
    date.setDate(thisDate + 1);
  }
  // console.log(result);
  return result;
}