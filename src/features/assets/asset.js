import React, { useEffect } from "react";
import styles from './assets.module.scss';
import { useDispatch } from "react-redux";
import { getDataAsync } from "./assetsSlice";
import AssetsList from "./assetsList";
import AssetsTools from "./assetsTools";

export const Assets = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getDataAsync()) }, []);

  return (
    <section className={styles.assets}>
      <AssetsList/>
      <AssetsTools/>
    </section>
  )
}
