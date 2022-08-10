import React from "react";
import styles from './calculater.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { calcDisplay, calcLeft, calcTop, setDisplay, setLeft, setTop, btnClick, getExp, getRes, inputExp, getLabel, back} from "./calculatorSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export const Calculator = () => {
  const display = useSelector(calcDisplay)
  const left = useSelector(calcLeft)
  const top = useSelector(calcTop)
  const exp = useSelector(getExp)
  const res = useSelector(getRes)
  const label = useSelector(getLabel)
  const dispatch = useDispatch();


  const moving = (e) => {
    const target = e.target.closest('section');
    // e.preventDefault();
    let shiftX = e.clientX - target.getBoundingClientRect().left;
    let shiftY = e.clientY - target.getBoundingClientRect().top;
   
    const move = (x, y) => {
      dispatch(setLeft(x - shiftX))
      dispatch(setTop(y - shiftY))
    }
    const mouseMove = e => move(e.pageX, e.pageY);
    document.addEventListener('mousemove', mouseMove)
    target.ondragstart = () => false;
    target.onmouseup = () => {
      document.removeEventListener('mousemove', mouseMove);
      e.onMouseUp = null;
    };
  } 

  const keyClick = e => dispatch(btnClick(e.target.value));

  const style = {left: `${left}px`, top: `${top}px`, display }
  return (
    <section className={styles.calculator} 
      style={style}
      onMouseDown={ e=>moving(e) }
    >
      <div className={styles.display}>
        <header>
          <label>{label}</label>
          <button onClick={() => dispatch(setDisplay('none'))}>&times;</button>
        </header>
        <input type='text' className={styles.main} readOnly
          defaultValue={exp} 
          // onInput={ e => dispatch(inputExp(e.target.value)) }
        />
        <input type='text'  className={styles.service} defaultValue={res} readOnly/>
        <nav><ul>
          <li><button
            onClick={()=>dispatch(back())}
          ><FontAwesomeIcon icon={faDeleteLeft}/></button></li>
        </ul></nav>
      </div>      
      
      <div className={styles.keyboard} onClick={(e)=>keyClick(e)}>
        <button value='set' className={`${styles.action} ${styles.btnText}`}>Set</button>
        <button value='clear' className={`${styles.action} ${styles.btnText}`}>C</button>
        <button value='brackets' className={`${styles.action} ${styles.btnText}`}>()</button>
        <button value='divide' className={styles.action}>&divide;</button>

        <button value={7}>7</button>
        <button value={8}>8</button>
        <button value={9}>9</button>
        <button value='multiply' className={styles.action}>&times;</button>

        <button value={4}>4</button>
        <button value={5}>5</button>
        <button value={6}>6</button>
        <button value='subtract' className={styles.action}>&ndash;</button>

        <button value={1}>1</button>
        <button value={2}>2</button>
        <button value={3}>3</button>
        <button value='add' className={styles.action}>+</button>

        <button value='sign'>&plusmn;</button>
        <button value={0}>0</button>
        <button value='dot'>.</button>
        <button value='equals' className={styles.equals}>=</button>

      </div>      

    </section>
  )
}