import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assets, status, expanded, getDataAsync, showAll} from "./assetsSlice";
import styles from './assetsList.module.scss';
import AssetsItem from "./assetsItem/assetsItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import AssetsForm from "./assetsForm";

export const Assets = () => {
  const data = useSelector(assets)
  const loader = useSelector(status)
  const expand = useSelector(expanded)
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(getDataAsync()) }, []);

  // console.log(Date.now());

  return (
    <>
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

              <li>
                <button type="button" 
                  className={ styles.expandButton }
                  onClick={ () => dispatch(showAll()) }
                ><FontAwesomeIcon icon={ expand ? faAnglesUp : faAnglesDown } /></button>

              </li>
            </ul>
          : null  
        }

        
      </div>

      <AssetsForm/>
   
    </>

  )
}
