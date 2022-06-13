import React, { useEffect } from "react";
import styles from './display.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { display, setDisplayMode, getMonth } from "../organizerSlice";
import Month from "./month";
import Week from "./week";
import Day from "./day";

export const Display = () => {
  const mode = useSelector(display)
  const dispatch = useDispatch();


  useEffect(() => { dispatch(getMonth(Date.now())) }, []);

  const modes = ['month', 'week', 'day', ];
  let content = null;

  switch ( mode ) {
    case 'week': content = <Week/>; break
    case 'day' : content = <Day/>; break
    default: content = <Month/>
  }

  return (
    <>
      <nav className={styles.modeNav}>
        {modes.map(item => <label key={item}><input type="radio" name="mode" id={item} value={item}
          onChange={ e => dispatch( setDisplayMode(e.target.value)) }
          defaultChecked = { mode === item }
        /><span>{item[0].toLocaleUpperCase()}</span></label>)}
      </nav>

      {content}
    </>
      
  )    
}
