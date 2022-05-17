import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync, addYuan, selectData, showBtnUan } from "./toDoListSlice";
import styles from './ToDoList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export function ToDoList() {

  const data = useSelector(selectData)
  const btnUan = useSelector(showBtnUan)
  const element = <FontAwesomeIcon icon={faCoffee} />

  const dispatch = useDispatch();
  // const [showBtn, setshowBtn] = useState(false);


  const yuan = {
    id: 3,
    currensy: 'CNY',
    value: 5000,
    status: 'active',
  }

  useEffect(() => {dispatch(getDataAsync())}, []);

  return (
    <>
      { data.length > 0 
        ? <ul className={styles.toDoList}>
            {data.map(item => (<li key={item.id}>{item.currensy} - {item.value}</li>))}
          </ul>
        : null  
      }
      {btnUan ? <button onClick={() => dispatch(addYuan(yuan))} >Yuan {element}</button> : null}
    </>
  )
}