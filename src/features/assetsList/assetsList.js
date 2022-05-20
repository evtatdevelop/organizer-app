import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assets, status, getDataAsync } from "./assetsListSlice";
import styles from './assetsList.module.scss';
// import WithService from "../../hoc";

export const AssetsList = props => {

  const data = useSelector(assets)
  const loader = useSelector(status)

  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getDataAsync()) }, []);

  return (

    <div className={styles.toDoList}>

     { loader === 'loading' ? <div>LOADING</div> : null}

      { data.length > 0 
        ? <ul className={styles.toDoList}>
            {data.map(item => (<li key={item.id}>{item.currensy} - {item.value}</li>))}
          </ul>
        : null  
      }
    </div>
  )
}

// export default  WithService()(AssetsList);