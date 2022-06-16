import React from "react";
import styles from './itemDay.module.scss';
import { setDisplayMode } from "../../../organizerSlice";
import {  useDispatch } from "react-redux";

export const ItemDay = ( props ) => {
  const { item, direction } = props;
  const dispatch = useDispatch();

  const now = Date.now();
  let itemDay = item.dateNumber ? styles.itemDay : `${styles.itemDay} ${styles.empty}`;
  itemDay = now > item.startDayTime && now < item.endDayTime ? `${itemDay} ${styles.today}` : itemDay;
  itemDay = direction ? `${itemDay} ${styles[direction]}` : itemDay;
  const dayLabel = item.day === 0 || item.day === 6 ? `${styles.lableDay} ${styles.weekEndColor}` : `${styles.lableDay} ${styles.weekDayColor}`;
  let events, profit, costs;

  if ( item.data ) {
    profit = item.data.filter(item => item.type === 'profit').reduce((sum, curr) => sum + +curr.value, 0)
    costs = item.data.filter(item => item.type === 'costs').reduce((sum, curr) => sum + +curr.value, 0)
    events = item.data.filter(item => item.type === 'event').length;  
  }

  const handlerClick = () => {
    console.log(item.key);
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
          { !!profit ? <p className={styles.profit}><span>Profit</span> <span>{profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p> : null}
          { !!costs ? <p className={styles.costs}><span>Costs</span> <span>{costs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span></p> : null}
          { !!events ? <p className={styles.event}><span>{events > 1 ? 'Events ' : 'Event '}</span> <span>{events}</span></p> : null}
        </div>        
      </button>
    </li>
  )    
}