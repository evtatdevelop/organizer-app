import React from "react";
import styles from './assets.module.scss';
import AssetsList from "./assetsList";
import AssetsForm from "./assetsForm";

export const Assets = () => {
  return (
    <div className={styles.assets}>

      <AssetsList/>

      <AssetsForm/>

    </div>
  )
}
