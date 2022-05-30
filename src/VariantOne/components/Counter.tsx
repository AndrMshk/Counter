import React from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../redux/store';
import { InitialStateType } from '../redux/reducer';

export const Counter: React.FC = () => {

  const counter = useSelector<StateType, InitialStateType>(state => state.counter);

  return (
    <div className={counter.value === counter.maxValue ? `${'counter'} ${'red'}` : 'counter'}>
      {counter.value}
    </div>
  );
};