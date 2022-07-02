import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incAC, resetAC } from './bll_WithActionCreator/reducer_WithActionCreator';
import { AppStateType } from './bll_WithActionCreator/store_WithActionCreator';

export const CounterWithActionCreator = () => {

  const value = useSelector<AppStateType, number>(state => state.counter.value);
  const dispatch = useDispatch();

  const incValueHandler = () => {
    dispatch(incAC());
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