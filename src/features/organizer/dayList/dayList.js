import React from "react";
import styles from './dayList.module.scss';
import ItemDay from "./ItemDay";

export const DayList = () => {

  const date = new Date();

  const monthDays = getCurrMnthDay(date.getFullYear(), date.getMonth());

  return (
    <ul className={styles.dayList}>
      {monthDays.map(
        item => <ItemDay key = {item.key} item = {item} />
      )}
   </ul>
  )    
}

const getCurrMnthDay = (year, month) => {
  const names = Object.freeze([ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
  const date = new Date(year, month, 1);
  const result = [];  
  // first days of week
  let day = date.getDay()
  if ( day > 0 ) while ( day-- > 1 ) {
    result.push({'key': Math.random(),'date': '','day': '','dayName': '',});
  }

  while (date.getMonth() === month) {
    const key = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    result.push({
      'key': key,
      'date': date.getDate(), 
      'dayName': names[date.getDay()],
    }); 
    date.setDate(date.getDate() + 1);
  }
  return result;
}