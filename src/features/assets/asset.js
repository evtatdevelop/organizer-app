import React, { useEffect } from "react";
import styles from './assets.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { showButtonAll, getDataAsync, showAllAssets } from "./assetsSlice";
import AssetsList from "./assetsList";
import AssetsTools from "./assetsTools";

export const Assets = () => {
  const showButton = useSelector(showButtonAll)
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getDataAsync()) }, []);

  return (
    <section className={styles.assets}>
      <AssetsTools/>
      <AssetsList/>
      {showButton 
        ? <button
            className={styles.showAllAssets} 
            type="button" 
            onClick={() => dispatch(showAllAssets())}
          > + </button> 
        : null
      }
    </section>
  )
}
