import React, { useEffect } from "react";
import styles from './assets.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { showButtonAll, onlyActive, getDataAsync, showAllAssets } from "./assetsSlice";
import AssetsList from "./assetsList";
import AssetsTools from "./assetsTools";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import worldCurrencies from "world-currencies";

export const Assets = () => {
  const showButton = useSelector(showButtonAll)
  const openclose = useSelector(onlyActive)
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getDataAsync()) }, []);

  // const currencies = worldCurrencies;
  // console.log(currencies.RUB);

  return (
    <section className={styles.assets}>
      <AssetsTools/>
      <AssetsList/>
      {showButton 
        ? <button
            className={styles.showAllAssets} 
            type="button" 
            onClick={() => dispatch(showAllAssets())}
          > <FontAwesomeIcon icon={ faCaretDown } className={openclose ? styles.iconButton : styles.iconButtonClose} /> </button> 
        : null
      }
      {/* <div className={styles.gratitudes}><a href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a></div> */}
    </section>
  )
}
