import React from "react";
import styles from './assetsForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { 
  currentAsset, 
  setCurrCurrensy, setCurrValue, setCurrStatus, setCurrType, 
  saveAsset, newAsset, removeAsset 
} from "../../assetsSlice";

export const AssetsForm = () => {
  const data = useSelector(currentAsset);
  const {id, currensy, value, status, type, time} = data;

  const dispatch = useDispatch();

  const checked = status === 'active' ? 'checked' : null;
  
  //todo input data check
  //todo set data format
  //todo checkbox reset?! styles afte delete doesn't rest, ...

  return (
    <form 
      id="assetForm"
      name="assetForm"
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
          id="activeCh"
          defaultChecked={ checked }
          onClick={ e => { dispatch(setCurrStatus(e.target.checked))} }
      /> <span>Show</span> </label>
      
      <button type='submit'>
        { id ? 'Save' : 'Add' }
      </button>

      { id 
        ? <button type="button"
            onClick={ e => { 
              dispatch(removeAsset(id));
              e.target.form.reset();
              // document.getElementById('activeCh').defaultChecked=false;
            }}
          >Remove</button>
        : null
      }
    </form>
  )
}

