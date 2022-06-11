import React from "react";
import styles from './dayList.module.scss';
import ItemDay from "./ItemDay";

export const DayList = () => {

  // const date = new Date(Date.now()+35*24*60*60*1000*2);
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
    result.push({
    'key': Math.random(),
    'date': null,
    'day': null,
    'dayName': null,
    'startDayTime': null,
    'endDayTime': null,
    'weekNumber': null,
  });
  }

  while (date.getMonth() === month) {

    const startDayTime = date.getTime();
    const endDayTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999).getTime();

    const currentdate = new Date(date);
    const onejan = new Date(currentdate.getFullYear(),0,1);
    const weekNumber = Math.ceil((((date - onejan) / 86400000) + onejan.getDay() ) / 7);

    
    const key = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    result.push({
      'key': key,
      'date': date.getDate(), 
      'dayName': names[date.getDay()],
      'startDayTime': startDayTime,
      'endDayTime': endDayTime,
      'weekNumber': weekNumber,
    }); 
    date.setDate(date.getDate() + 1);
  }

  console.log(result);

  return result;
}