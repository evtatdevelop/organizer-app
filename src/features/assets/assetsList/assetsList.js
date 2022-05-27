import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { assets, getOneAsset} from "../assetsSlice";
import styles from './assetsList.module.scss';
import AssetsItem from "./assetsItem";

export const AssetsList = () => {
  const data = useSelector(assets)
  const dispatch = useDispatch();

  return (
    data.length > 0 
      ? <ul className={ styles.assestsList }>
          { data.map(item => (
            <AssetsItem 
              key={ item.id }
              item={ item }
              hadlerClick={ id => dispatch( getOneAsset(id) ) }
            />
          )) }
        </ul>
      : null 
  )
}
