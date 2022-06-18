import React from "react";
import styles from './itemDay.module.scss';
import { setDisplayMode, setDay } from "../../../organizerSlice";
import {  useDispatch } from "react-redux";
import { moneyFormat } from "../../../../../helpers";

export const ItemDay = ( props ) => {
  const { item, direction } = props;
  const dispatch = useDispatch();

  const now = Date.now();
  let itemDay = item.dateNumber ? styles.itemDay : `${styles.itemDay} ${styles.empty}`;
  itemDay = now > item.startDayTime && now < item.endDayTime ? `${itemDay} ${styles.today}` : itemDay;
  itemDay = direction ? `${itemDay} ${styles[direction]}` : itemDay;
  const dayLabel = 
    now > item.startDayTime + 24 * 60 * 60 * 1000 
      ? `${styles.lableDay} ${styles.postDays}` 
      : item.day === 0 || item.day === 6 
        ? `${styles.lableDay} ${styles.weekEndColor}` 
        : `${styles.lableDay} ${styles.weekDayColor}`;
  let events, profit, costs;

  if ( item.data ) {
    profit = item.data.filter(item => item.type === 'profit').reduce((sum, curr) => sum + +curr.value, 0)
    costs = item.data.filter(item => item.type === 'costs').reduce((sum, curr) => sum + +curr.value, 0)
    events = item.data.filter(item => item.type === 'event').length;  
  }

  const handlerClick = () => {
    console.log(item.key);
    dispatch( setDay(item.dateNumber));
    dispatch( setDisplayMode('day'));
  } 
  
  return (
    <li className={itemDay} >
      <button onClick={ () => handlerClick() }>
        <div className={ dayLabel }> 
          <span className={styles.numDay}>{ item.dateNumber }</span>
          { item.dayName }
        </div>

        <div className={styles.dataDay}>
          { !!profit ? <p className={styles.profit}><span>Profit</span> <span>{ moneyFormat(profit) }</span></p> : null}
          { !!costs ? <p className={styles.costs}><span>Costs</span> <span>{ moneyFormat(costs) }</span></p> : null}
          { !!events ? <p className={styles.event}><span>{events > 1 ? 'Events ' : 'Event '}</span> <span>{events}</span></p> : null}
        </div>        
      </button>
    </li>
  )    
}