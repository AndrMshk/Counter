import React, { useState } from 'react';
import { SetPanel } from './components/SetPanel';
import { Counter } from './components/Counter';
import { ControlPanel } from './components/ControlPanel';

export const CounterWithReducerVariant1 = () => {

  const [error, setError] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="App">
        <SetPanel
          setError={setError}
        />
      </div>
      <div className="App">
        {error
          ? <span className="red">ERROR</span>
          : <>
            <Counter />
            <ControlPanel />
          </>}
      </div>
    </div>
  );
};