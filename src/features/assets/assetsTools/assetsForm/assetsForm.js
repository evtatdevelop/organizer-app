import React from "react";
import styles from './assetsForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { currentAsset, setCurrCurrensy, setCurrValue, setCurrStatus, setCurrType, saveAsset, newAsset } from "../../assetsSlice";

export const AssetsForm = () => {
  const data = useSelector(currentAsset);
  const {id, currensy, value, status, type, time} = data;

  const dispatch = useDispatch();

  const checked = status === 'active' ? 'checked' : null;
  
  //todo input data check
  //todo set data format
  
  return (
    <form 
      className={ styles.assetsForm }
      onSubmit={ (e)=>{ 
        e.preventDefault();
        id ? dispatch(saveAsset(data)) : dispatch(newAsset(data)) 
        e.target.reset();
      } }
    >
      <label> <input type='text' placeholder='Curensy' 
        defaultValue={ currensy }
        onInput={ e => dispatch(setCurrCurrensy(e.target.value)) }
      /> </label>

      <label> <input type='number' placeholder='Value' 
        defaultValue={ value }
        onInput={ e => dispatch(setCurrValue(e.target.value)) }
      /> </label>

      <label> <input type='text' placeholder='Type' 
        defaultValue={ type }
        onInput={ e => dispatch(setCurrType(e.target.value)) }
      /> </label>

      <label> <input type='checkbox'
          defaultChecked={ checked }
          onClick={ e => { dispatch(setCurrStatus(e.target.checked))} }
      /> <span>Show</span> </label>
      
      <button type='submit'>
        {id ? 'Save' : 'Add'}
      </button>
    </form>
  )
}

