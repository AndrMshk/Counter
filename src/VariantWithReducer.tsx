import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incValueTC, resetAC, setFromLocalStorageTC } from './bll/reducer';
import { AppStateType } from './bll/store';

export const VariantWithReducer = () => {

  const value = useSelector<AppStateType, number>(state => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(setFromLocalStorageTC())

  }, [])

  const incValueHandler = () => {
    // @ts-ignore
    dispatch(incValueTC())
  };

  const resValueHandler = () => {
    dispatch(resetAC(0)) // сюда подставить значпение с сэта
  };

  return (
    <div>
      <div className="App">
        <h1>{value}</h1>
        <button onClick={incValueHandler}>+</button>
        <button onClick={resValueHandler}>RES</button>
      </div>
    </div>
  );
};