import React, { useState } from "react";
import styles from './day.module.scss';
import { days, currYear, currMonth, currDay } from "../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { moneyFormat } from "../../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export const Day = () => {  
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const monthDays = useSelector(days)

  const getTimeNow = ( time ) => {
    let h = time.getHours()
    let m = time.getMinutes()
    h = h > 9 ? h : `0${h}`
    m = m > 9 ? m : `0${m}`
    return `${h}:${m}`
  }
  setInterval(() => { setTimeNow( getTimeNow(new Date(Date.now())) ) }, 60000);
  const [timeNow, setTimeNow] = useState(getTimeNow(new Date(Date.now())));
  
  const dataDay = monthDays.find(item => item.key === `${year}.${month}.${day}`);
  const totalProfit = moneyFormat(dataDay.data.filter(item => item.type === 'profit').reduce((sum, curr) => sum + +curr.value, 0))
  const totalCosts = moneyFormat(dataDay.data.filter(item => item.type === 'costs').reduce((sum, curr) => sum + +curr.value, 0))
  const cardCosts = dataDay.data.filter(item => item.type === 'costs' && item.cash === 'card').reduce((sum, curr) => sum + +curr.value, 0)
  const cashCosts = dataDay.data.filter(item => item.type === 'costs' && item.cash === 'cash').reduce((sum, curr) => sum + +curr.value, 0)


// todo: Button to Month
// todo: hover description
// ! todo: eventItem component 
// todo: add '0' to time
// todo: clock depicts onli in a current day

  return ( 
    <section className={styles.dayList}>
      <header className={styles.dayHeader}>
        <div className={styles.dateNumber}>{dataDay.dateNumber}</div>
        <div className={styles.dateIinfo}>
          <span>{dataDay.monthName} {year}</span>
          <button 
            className={styles.weekBtn}
            onClick={() => console.log(dataDay.weekNumber)}
          >Week {dataDay.weekNumber}</button>
          <span className={dataDay.day === 0 || dataDay.day === 6
            ? `${styles.weekEndColor}` 
            : `${styles.weekDayColor}`
            }
          >{dataDay.dayNameLong}</span>          
        </div>
        <div className={styles.clock}>{timeNow}</div>
      </header>

      <ul className={styles.eventList}>
        {dataDay.data.map(item => <li key={item.id}>
          <button onClick={()=>console.log(item.id)}>
            <span className={styles.eventTime}>{time(item.date)}</span>
            <span className={styleEventName(item.date)}>{item.name}</span> 
            <span className={styles.eventStatus}>
              {item.status === 'resolved' ? <FontAwesomeIcon icon={faCheck}/> : null}
            </span>
            <span className={styleEventVal(item.type)}>
              {item.type !== 'event' 
                ? item.type !== 'profit' 
                  ? `- ${moneyFormat(item.value)}`
                  : `+ ${moneyFormat(item.value)}`
                : null
              }
            </span>
            <span className={styleEventCash(item.cash)}>
              {item.cash === 'cash' ? <FontAwesomeIcon icon={faWallet}/> : null}
              {item.cash === 'card' ? <FontAwesomeIcon icon={faCreditCard}  /> : null}
            
            </span>
          </button>
        </li>)}
      </ul>

      <div className={styles.dayTotals}>
        <div className={styles.costtypes}>
        {cardCosts > 0
          ? <span className={`${styles.costs}`}>- {moneyFormat(cardCosts)} <FontAwesomeIcon icon={faCreditCard} className={styles.card}/></span>
          : null}
        {cashCosts > 0
          ? <span className={`${styles.costs}`}>- {moneyFormat(cashCosts)} <FontAwesomeIcon icon={faWallet} className={styles.cash}/></span>
          : null}
        </div>
        <div className={styles.total}>
          <span className={`${styles.profit}`}>+ {totalProfit}</span>
          <span className={`${styles.costs}`}>- {totalCosts}</span>
        </div>
      </div>
    </section>
  
  )    
}

const time = (timeStamp) => {
  const date = new Date(+timeStamp)
  return `${date.getHours()}:${date.getMinutes()}` 
}

const styleEventVal = (eventType) => {
  let result = styles.eventValue;
  switch ( eventType ) {
    case 'profit': result += ' ' + styles.profit; break;
    case 'costs': result += ' ' + styles.costs; break;
    default: result += ' ' + styles.event; break;
  }
  return result;
} 

const styleEventName = (itemDate) => {
  let result = styles.eventName;
  if ( itemDate < Date.now() ) result += ` ${styles.past}`;
  return result;
}

const styleEventCash = (itemCash) => {
  let result = styles.eventCash;
  if ( itemCash === 'cash' ) result += ` ${styles.cash}`;
  if ( itemCash === 'card' ) result += ` ${styles.card}`;
  return result;  
}
