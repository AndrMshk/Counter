import React from 'react';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { incAC, InitialStateType, resetAC } from '../redux/reducer';
import { StateType } from '../redux/store';

export const ControlPanel: React.FC = () => {

  const counter = useSelector<StateType, InitialStateType>(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Button name="+" isDisabled={counter.value === counter.maxValue} onClick={() => dispatch(incAC())} />
      <Button name="RESET" isDisabled={counter.value === counter.startValue} onClick={() => dispatch(resetAC())} />
    </>
  );
};