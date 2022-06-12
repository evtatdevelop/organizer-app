import React from "react";
import styles from './display.module.scss';
import Month from "./month";
import Week from "./week";
import Day from "./day";

export const Display = () => {

  let content = null;
  let listMode = 'month';
      // listMode = 'week';
      // listMode = 'day';

  switch ( listMode ) {
    case 'week': content = <Week/>; break
    case 'day' : content = <Day/>; break
    default: content = <Month/>
  }

  return (
      content
  )    
}
