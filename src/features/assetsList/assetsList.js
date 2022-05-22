import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assets, status, getDataAsync } from "./assetsListSlice";
import styles from './assetsList.module.scss';
import AssetsItem from "./assetsItem/assetsItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const AssetsList = () => {
  const data = useSelector(assets)
  const loader = useSelector(status)
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getDataAsync()) }, []);

  // console.log(Date.now());

  return (
    <div className={styles.assestsList}>

     { loader === 'loading' ? <div>LOADING</div> : null}

      { data.length > 0 
        ? <ul>
            {data.map(item => (
              <AssetsItem 
                key={ item.id }
                item={ item }
                hadlerClick={ (id)=>{console.log(id)} }
              />
            ))}

            <li><button type="button" className={ styles.addButton } onClick={ ()=>console.log('add') }>
              <FontAwesomeIcon icon={ faPlus } />
            </button></li>
          </ul>
        : null  
      }
    </div>
  )
}
