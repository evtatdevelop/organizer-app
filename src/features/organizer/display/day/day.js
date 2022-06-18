import React from "react";
import styles from './day.module.scss';
import { days, currYear, currMonth, currDay } from "../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { moneyFormat } from "../../../../helpers";

export const Day = () => {  
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const monthDays = useSelector(days)
  // const date = new Date(year, month , day)

  const dataDay = monthDays.find(item => item.key === `${year}.${month}.${day}`)

// todo: color for past
// todo: total summ
// todo: executed sign
// todo: card or cash sign

  return ( 
    <section className={styles.dayList}>
      <header className={styles.dayHeader}>
        <div className={styles.dateNumber}>{dataDay.dateNumber}</div>
        <div className={styles.dateIinfo}>
          <span>{dataDay.monthName} {year}</span>
          <span>Week {dataDay.weekNumber}</span>
          <span>{dataDay.dayNameLong}</span>          
        </div>
      </header>

      <ul className={styles.eventList}>
        {dataDay.data.map(item => <li key={item.id}>
          <button>
            <span className={styles.eventTime}>{time(item.date)}</span>
            <span className={styles.eventName}>{item.name}</span> 
            <span className={styleEventVal(item.type)}>
              {item.type !== 'event' 
                ? item.type !== 'profit' 
                  ? `- ${moneyFormat(item.value)}`
                  : `+ ${moneyFormat(item.value)}`
                : null
              }
            </span>
          </button>
        </li>)}
      </ul>
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