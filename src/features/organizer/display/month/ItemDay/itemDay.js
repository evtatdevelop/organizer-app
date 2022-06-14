import React from "react";
import styles from './itemDay.module.scss';


export const ItemDay = ( props ) => {
  const { item } = props;
  const now = Date.now();
  let itemDay = item.dateNumber ? styles.itemDay : `${styles.itemDay} + ${styles.empty}`;
  const dayLabel = item.day === 0 || item.day === 6 ? `${styles.lableDay} + ${styles.weekEndColor}` : `${styles.lableDay} + ${styles.weekDayColor}`;
  itemDay = now > item.startDayTime && now < item.endDayTime ? `${itemDay} + ${styles.today}` : itemDay;
  
  let events, profit, costs;

  if ( item.data ) {
    profit = item.data.filter(item => item.type === 'profit').reduce((sum, curr) => sum + +curr.value, 0)
    costs = item.data.filter(item => item.type === 'costs').reduce((sum, curr) => sum + +curr.value, 0)
    events = item.data.filter(item => item.type === 'event').length;  
  }

  console.log(profit, costs);
  
  return (
    <li className={itemDay} >
      <div className={ dayLabel }> 
        <span className={styles.numDay}>{ item.dateNumber }</span>
        { item.dayName }
      </div>

      <div className={styles.dataDay}>
        { !!profit ? <p className={styles.profit}><span>Profit</span> <span>{profit}</span></p> : null}
        { !!costs ? <p className={styles.costs}><span>Costs</span> <span>{costs}</span></p> : null}
        { !!events ? <p className={styles.event}><span>{events > 1 ? 'Events ' : 'Event '}</span> <span>{events}</span></p> : null}

      </div>
      
    </li>
  )    
}