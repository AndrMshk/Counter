import React, { useState } from 'react';
import { typeX } from './App';
import { SetPanel } from './SetPanel';
import { Counter } from './Counter';
import { ControlPanel } from './ControlPanel';
import { Button } from './Button';

export const VariantTwo = () => {

  const initialX = JSON.parse(localStorage.getItem('KeyVariantOTwo') || '{"startX": 0, "maxX": 5}');

  const [x, setX] = useState<typeX>(initialX);
  const [newX, setNewX] = useState<typeX>(x);
  const [option, setOption] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const setOptionHandler = (x: typeX) => {
    setX(x);
    setOption(!option);
  };

  return (
    <div className="App">
      {option
        ? <SetPanel
          setX={(x) => setOptionHandler(x)}
          newX={newX}
          setNewX={setNewX}
          error={error}
          setError={setError}
          localStorageKey="KeyVariantOTwo"
        />
        : <Counter
          x={x}
        />}
      {!option && <>
        <ControlPanel
          x={x}
          setX={setX}
          startX={newX}
        />
        <Button
          name="OPTION"
          isDisabled={false}
          onClick={() => setOption(!option)}
        />
      </>}
    </div>
  );
};