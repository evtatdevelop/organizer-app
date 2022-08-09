import React from "react";
import styles from './calculater.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { calcDisplay, calcLeft, calcTop, setDisplay, setLeft, setTop } from "./calculatorSlice";

export const Calculator = () => {
  const display = useSelector(calcDisplay)
  const left = useSelector(calcLeft)
  const top = useSelector(calcTop)
  const dispatch = useDispatch();

  const moving = (e) => {
    e.preventDefault();
    let shiftX = e.clientX - e.target.getBoundingClientRect().left;
    let shiftY = e.clientY - e.target.getBoundingClientRect().top;
    const move = (x, y) => {
      dispatch(setLeft(x - shiftX))
      dispatch(setTop(y - shiftY))
    }
    const mouseMove = e => move(e.pageX, e.pageY);
    document.addEventListener('mousemove', mouseMove)
    e.target.ondragstart = () => false;
    e.target.onmouseup = () => {
      document.removeEventListener('mousemove', mouseMove);
      e.onMouseUp = null;
    };
  } 



  const style = {left: `${left}px`, top: `${top}px`, display }
  return (
    <section 
      className={styles.calculator} 
      style={style}
      onMouseDown={ e=>moving(e) }
    >
      
      <button type='button' className={styles.onoff}
        onClick={() => dispatch(setDisplay('none'))}
      >on/off</button>
    </section>
  )
}