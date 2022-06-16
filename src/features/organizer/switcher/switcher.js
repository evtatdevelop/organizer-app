import React from "react";
import styles from './switcher.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { display, setDisplayMode } from "../organizerSlice";

export const Switcher = () => {
  const mode = useSelector(display)
  const dispatch = useDispatch();

  const modes = ['month', 'week', 'day', ];

  return (
    <nav className={styles.modeNav}>
      {modes.map(item => <label key={item}>
        <input type="radio" name="mode" id={item} value={item}
          onChange = { e => dispatch( setDisplayMode(e.target.value)) }
          checked = { mode === item }
        /><span>{item[0].toLocaleUpperCase()}</span>
      </label>)}
    </nav> 
  )    
}