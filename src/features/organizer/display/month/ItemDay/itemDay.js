import React from "react";
import styles from './itemDay.module.scss';


export const ItemDay = ( props ) => {
  const { item } = props;
  const now = Date.now();
  let itemDay = item.dateNumber ? styles.itemDay : `${styles.itemDay} + ${styles.empty}`;
  const dayName = item.day === 0 || item.day === 6 ? styles.weekEndColor : styles.weekDayColor;
  itemDay = now > item.startDayTime && now < item.endDayTime ? `${itemDay} + ${styles.today}` : itemDay;
  
console.log(item.data);

  return (
    <li
      className={itemDay}
    >
      <p>{ item.dateNumber }</p >
      <p className={ dayName } >{ item.dayName }</p>
      <p style={{'fontSize': '.6vw'}}>{ item.startDayTime}</p>
      <p style={{'fontSize': '.6vw'}}>{ item.endDayTime}</p>
      <p style={{'color': 'green'}}>{ item.data && item.data.length > 0 ? item.data[0]['name'] : null}</p>
      <p>{ item.weekNumber }</p>
    </li>
  )    
}