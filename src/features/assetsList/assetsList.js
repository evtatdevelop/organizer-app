import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assets, status, getDataAsync } from "./assetsListSlice";
import styles from './assetsList.module.scss';
import AssetsItem from "./assetsItem/assetsItem";

export const AssetsList = () => {
  const data = useSelector(assets)
  const loader = useSelector(status)
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getDataAsync()) }, []);

  // console.log(Date.now());

  return (
    <div className={styles.toDoList}>

     { loader === 'loading' ? <div>LOADING</div> : null}

      { data.length > 0 
        ? <ul className={styles.toDoList}>
            {data.map(item => (<AssetsItem 
              key={ item.id }
              item={ item }
              hadlerClick={ (id)=>{console.log(id)} }
            />))}
          </ul>
        : null  
      }
    </div>
  )
}
