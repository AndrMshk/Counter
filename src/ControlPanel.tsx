import React from 'react';
import { Button } from './Button';
import { typeX } from './App';

type ControlPanelPropsType = {
  x: typeX
  setX: (x: typeX) => void
  startX: typeX
}

export const ControlPanel: React.FC<ControlPanelPropsType> = ({ x, setX, startX }) => {

  const increase = () => {
    setX({ ...x, startX: x.startX + 1 });
  };

  const reset = () => {
    setX({ ...x, startX: startX.startX});
  };

  return (
    <>
      <Button name="+" isDisabled={x.startX >= x.maxX} onClick={increase} />
      <Button name="RESET" isDisabled={x.startX === startX.startX} onClick={reset} />
    </>
  );
};