import React, { useState } from 'react';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateType, setChangedCounterAC } from '../redux/reducer';
import { StateType } from '../redux/store';

type SetPanelPropsType = {
  setOption: (option: boolean) => void
}

export const SetPanel: React.FC<SetPanelPropsType> = ({ setOption }) => {

    const counter = useSelector<StateType, InitialStateType>(state => state.counter);

    const [changedCounter, setChangedCounter] = useState<InitialStateType>(counter);

    const dispatch = useDispatch();

    const setHandler = () => {
      dispatch(setChangedCounterAC(changedCounter));
      setOption(false);
    };

    return (
      <div>
        <span>start value: </span>
        <input
          type="number"
          min={0}
          max={changedCounter.maxValue}
          className={changedCounter.startValue === changedCounter.maxValue ? 'inputRed' : ''}
          value={changedCounter.startValue}
          onChange={(event) => setChangedCounter({
            ...changedCounter,
            startValue: Number(event.target.value),
            value: Number(event.target.value),
          })}
        />
        <span>max value: </span>
        <input
          type="number"
          min={changedCounter.startValue}
          className={changedCounter.startValue === changedCounter.maxValue ? 'inputRed' : ''}
          value={changedCounter.maxValue}
          onChange={(event) => setChangedCounter({
            ...changedCounter, maxValue: Number(event.target.value),
          })}
        />
        <Button name="SET" isDisabled={changedCounter.startValue >= changedCounter.maxValue} onClick={setHandler} />
      </div>
    );
  }
;