import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTest, addAssets, getDataAsync, addYuan, selectData } from "./toDoListSlice";
import styles from './ToDoList.module.css';

export function ToDoList() {
  const data = useSelector(selectData)
  const dispatch = useDispatch();

  const yuan = {
    id: 3,
    currensy: 'CNY',
    value: 5000,
    status: 'active',
  }

  return (
    <>
      <ul className={styles.toDoList}>
        {data.map(item => (<li key={item.id}>{item.currensy} - {item.value}</li>))}
      </ul>

      <button
        onClick={() => dispatch(addYuan(yuan))}
      >Yuan</button>
    </>
  )
}