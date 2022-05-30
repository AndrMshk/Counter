import React from 'react';
import { Button } from './Button';
import { typeX } from './App';

type SetPanelPropsType = {
  setX: (x: typeX) => void
  newX: typeX
  setNewX: (startX: typeX) => void
  error: boolean
  setError: (error: boolean) => void
  localStorageKey: string
}

export const SetPanel: React.FC<SetPanelPropsType> = ({
  setX,
  newX,
  setNewX,
  error,
  setError,
  localStorageKey }) => {

    const changeXHandler = (set: number, xKey: string) => {
      if (xKey === 'startX') {
        setError(set >= newX.maxX);
      }
      if (xKey === 'maxX') {
        setError(set <= newX.startX);
      }
      setNewX({ ...newX, [xKey]: set });
    };

    const setNewXHandler = () => {
      setX(newX);
      localStorage.setItem(localStorageKey, JSON.stringify(newX));
    };

    return (
      <div>
        <span>start value: </span>
        <input
          type="number"
          min={0}
          className={error ? 'inputRed' : ''}
          value={newX.startX}
          onChange={(event) => changeXHandler(+event.currentTarget.value, 'startX')}
        />
        <span>max value: </span>
        <input
          type="number"
          min={0}
          className={error ? 'inputRed' : ''}
          value={newX.maxX}
          onChange={(event) => changeXHandler(+event.currentTarget.value, 'maxX')}
        />
        <Button name="SET" isDisabled={error} onClick={setNewXHandler} />
      </div>
    );
  }
;