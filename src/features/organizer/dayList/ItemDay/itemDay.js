import React from "react";
import styles from './itemDay.module.scss';


export const ItemDay = ( props ) => {

  const { item } = props;
  const itemDay = item.date !== '' ? styles.itemDay : `${styles.itemDay} + ${styles.empty}`;
  const dayName = item.dayName === 'sun' || item.dayName === 'sat' ? styles.weekEndColor : styles.weekDayColor;

  return (
    <li
      className={itemDay}
    >
      <p>{ item.date }</p >
      <p className={ dayName } >{ item.dayName }</p>
    </li>
  )    
}