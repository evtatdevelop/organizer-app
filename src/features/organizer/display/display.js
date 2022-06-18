import React, { useEffect } from "react";
// import styles from './display.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { display, getMonth } from "../organizerSlice";
import Month from "./month";
import Week from "./week";
import Day from "./day";

export const Display = () => {
  const mode = useSelector(display)
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getMonth(Date.now())) }, []);

  let content = null;

  switch ( mode ) {
    case 'week': content = <Week/>; break
    case 'day' : content = <Day/>; break
    default: content = <Month/>
  }

  return (
    <>
      {content}
    </>
      
  )    
}
