import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ative, getOneAsset} from "../assetsSlice";
import styles from './assetsList.module.scss';
import AssetsItem from "./assetsItem";

export const AssetsList = () => {
  const data = useSelector(ative)
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
