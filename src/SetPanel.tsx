import React from 'react';
import { Button } from './Button';
import { typeX } from './App';

type SetPanelPropsType = {
  setX: (x: typeX) => void
  startX: typeX
  setStartX: (startX: typeX) => void
  error: boolean
  setError: (error: boolean) => void
  localStorageKey: string
}

export const SetPanel: React.FC<SetPanelPropsType> = ({
  setX,
  startX,
  setStartX,
  error,
  setError,
  localStorageKey }) => {

    const changeXHandler = (set: number, xKey: string) => {
      if (xKey === 'startX') {
        setError(set >= startX.maxX);
      }
      if (xKey === 'maxX') {
        setError(set <= startX.startX);
      }
      setStartX({ ...startX, [xKey]: set });
    };

    const setNewXHandler = () => {
      setX(startX);
      localStorage.setItem(localStorageKey, JSON.stringify(startX));
    };

    return (
      <div>
        <span>start value: </span>
        <input
          type="number"
          min={0}
          className={error ? 'inputRed' : ''}
          value={startX.startX}
          onChange={(event) => changeXHandler(+event.currentTarget.value, 'startX')}
        />
        <span>max value: </span>
        <input
          type="number"
          min={0}
          className={error ? 'inputRed' : ''}
          value={startX.maxX}
          onChange={(event) => changeXHandler(+event.currentTarget.value, 'maxX')}
        />
        <Button name="SET" isDisabled={error} onClick={setNewXHandler} />
      </div>
    );
  }
;