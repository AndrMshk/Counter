import React, { useState } from 'react';
import { SetPanel } from './components/SetPanel';
import { Counter } from './components/Counter';
import { ControlPanel } from './components/ControlPanel';
import { Button } from './components/Button';
import { useSelector } from 'react-redux';
import { StateType } from './redux/store';
import { InitialStateType } from './redux/reducer';

export const VariantTwoWithReducer = () => {

  const [option, setOption] = useState<boolean>(true);

  return (
    <div className="App">
      {option
        ? <SetPanel
          setOption={setOption} />
        : <Counter />}
      {!option && <>
        <ControlPanel />
        <Button
          name="OPTION"
          isDisabled={false}
          onClick={() => setOption(true)}
        />
      </>}
    </div>
  );
};