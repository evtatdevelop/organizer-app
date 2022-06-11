import React from "react";
import styles from './organizer.module.scss';
import { DayList } from "./dayList/dayList";

export const Organiser = () => {

  // const now = Date.now()
  // const day = 60*60*24*1000;
  // const week = day*7;
  // const decade = day*10;
  // console.log('Today', now);
  // console.log('- day', now - week);
  // console.log('+ day', now + week);
  // const daysCurrMonth = new Date(+date.getFullYear(), +date.getMonth()+1, 0).getDate();
  // console.log(getDaysArray(date.getFullYear(), date.getMonth()));



  return (
    <section className={styles.organizer}>
      <DayList/>
    </section>
  )
}