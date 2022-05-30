import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incAC, resetAC } from './bllNew/reducer';
import { AppStateType } from './bllNew/store';

export const VariantWithReducerNew = () => {

  const value = useSelector<AppStateType, number>(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="App">
        <h1>{value}</h1>
        <button onClick={() => dispatch(incAC())}>+</button>
        <button onClick={() => dispatch(resetAC(0))}>RES</button>
      </div>
    </div>
  );
};