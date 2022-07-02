import React from 'react';
import { typeX } from '../App/App';

type CounterPropsType = {
  x: typeX
}
export const Counter: React.FC<CounterPropsType> = ({ x }) => {
  return (
    <>
      <div className={`counter ${x.startX >= x.maxX ? 'red' : ''}`}>
        {x.startX}
      </div>
    </>
  );
};