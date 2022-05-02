import React, { useState } from 'react';
import { typeX } from './App';
import { SetPanel } from './SetPanel';
import { Counter } from './Counter';
import { ControlPanel } from './ControlPanel';

export const VariantOne = () => {

  const initialX = JSON.parse(localStorage.getItem('KeyVariantOne') || '{}');

  const [x, setX] = useState<typeX>(initialX || { startX: 0, maxX: 5 });
  const [newX, setNewX] = useState<typeX>(x);
  const [error, setError] = useState<boolean>(false);

  return (
    <div>
      <div className="App">
        <SetPanel
          setX={setX}
          startX={newX}
          setStartX={setNewX}
          error={error}
          setError={setError}
          localStorageKey="KeyVariantOne"
        />
      </div>
      <div className="App">
        {error
          ? <span className="red">ERROR</span>
          : <>
            <Counter
              x={x}
            />
            <ControlPanel
              x={x}
              setX={setX}
              startX={newX}
            />
          </>}
      </div>
    </div>
  );
};