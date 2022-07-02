import React, { useState } from 'react';
import { typeX } from '../App/App';
import { SetPanel } from '../common-components/SetPanel';
import { Counter } from '../common-components/Counter';
import { ControlPanel } from '../common-components/ControlPanel';

export const VariantOne = () => {

  const initialX = JSON.parse(localStorage.getItem('KeyVariantOne') || '{"startX": 0, "maxX": 5}');

  const [x, setX] = useState<typeX>(initialX);
  const [newX, setNewX] = useState<typeX>(x);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="App">
        <SetPanel
          setX={setX}
          newX={newX}
          setNewX={setNewX}
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