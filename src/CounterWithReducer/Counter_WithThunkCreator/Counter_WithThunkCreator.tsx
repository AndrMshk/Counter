import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { incValueTC, resetAC, setFromLocalStorageTC } from './bll_WithThunkCreator/reducer_WithThunkCreator';
import { AppStateType, useAppDispatch } from './bll_WithThunkCreator/store_WithThunkCreator';

export const CounterWithThunkCreator = () => {

  const value = useSelector<AppStateType, number>(state => state.counter.value);
  const dispatch = useAppDispatch();  // custom useDispatch

  useEffect(() => {
    dispatch(setFromLocalStorageTC());
  }, []);

  const incValueHandler = () => {
    dispatch(incValueTC());
  };

  const resValueHandler = () => {
    dispatch(resetAC(0));
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