import React from "react";
import styles from './itemDay.module.scss';
import { setDisplayMode, setDay } from "../../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { moneyFormat } from "../../../../../helpers";
import { rates } from "../../../../commonAPI/commonSlice";

export const ItemDay = ( props ) => {
  const { item, direction } = props;
  const dispatch = useDispatch();
  const currencies = useSelector(rates)

  const now = Date.now();
  let itemDay = item.dateNumber ? styles.itemDay : `${styles.itemDay} ${styles.empty}`;
  itemDay = now > item.startDayTime && now < item.endDayTime ? `${itemDay} ${styles.today}` : itemDay;
  itemDay = direction ? `${itemDay} ${styles[direction]}` : itemDay;
  const dayLabel = 
    now > item.startDayTime + 24 * 60 * 60 * 1000 
      ? `${styles.lableDay} ${styles.pastDays}` 
      : item.day === 0 || item.day === 6 
        ? `${styles.lableDay} ${styles.weekEndColor}` 
        : `${styles.lableDay} ${styles.weekDayColor}`;

  let events, profit, costs, accepted;
  
    
  if ( item.data ) {
  
    // console.log(item.data);
  
    profit    = item.data.filter(item => item.type === 'profit').reduce((sum, curr) => {
      
      let rate = 1;
      if ( curr.currency !== 'RUB' ) {
        const currency = currencies.find(item => item.code === curr.currency)
        rate = currency.inverseRate;
      }
      return sum + +curr.value * rate
      
      // return sum + +curr.value
    }, 0)
    costs     = item.data.filter(item => item.type === 'costs').reduce((sum, curr) => {
      
      let rate = 1;
      if ( curr.currency !== 'RUB' ) {
        const currency = currencies.find(item => item.code === curr.currency)
        rate = currency.inverseRate;
      }
      return sum + +curr.value * rate

      // return sum + +curr.value
    }, 0)
    
    events    = item.data.filter(item => item.type === 'event').length;  
    // accepted  = !item.data.filter(itemEvent => 
    //   (itemEvent.status !== 'success' && itemEvent.mode === 'onetime') ||
    //   (itemEvent.mode === 'regular' && Number(itemEvent.last_date) < Number(item.endDayTime))
    //   ).length;
  }

  const handlerClick = () => {
    // console.log(item.key);
    if ( item.dateNumber ) {
      dispatch( setDay(item.dateNumber));
      dispatch( setDisplayMode('day'));      
    }
  } 
  
  return (
    <li className={itemDay} >
      <button onClick={ () => handlerClick() }>
        <div className={ dayLabel }> 
          <span className={styles.numDay}>{ item.dateNumber }</span>
          { item.dayName }
        </div>

        <div className={styles.dataDay}>
          { !!profit ? <p className={accepted ? styles.accepted : styles.profit}><span>Profit</span> <span>{ moneyFormat( Math.round(profit)) }</span></p> : null}
          { !!costs ? <p className={accepted ? styles.accepted : styles.costs}><span>Costs</span> <span>{ moneyFormat( Math.round(costs)) }</span></p> : null}
          { !!events ? <p className={accepted ? styles.accepted : styles.event}><span>{events > 1 ? 'Events ' : 'Event '}</span> <span>{events}</span></p> : null}
        </div>        
      </button>
    </li>
  )    
}