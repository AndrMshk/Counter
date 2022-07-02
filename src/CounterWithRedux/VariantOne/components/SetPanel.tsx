import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateType, setChangedCounterAC } from '../redux/reducer';
import { StateType } from '../redux/store';

type SetPanelPropsType = {
  setError: (error: boolean) => void
}

export const SetPanel: React.FC<SetPanelPropsType> = ({ setError }) => {

    const counter = useSelector<StateType, InitialStateType>(state => state.counter);

    const [changedCounter, setChangedCounter] = useState<InitialStateType>(counter);

    const dispatch = useDispatch();

    const onChangeStartValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => setChangedCounter({
      ...changedCounter,
      startValue: Number(event.target.value),
      value: Number(event.target.value),
    });

    const onChangeMaxValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => setChangedCounter({
      ...changedCounter, maxValue: Number(event.target.value),
    });

    useEffect(()=> {
      if (changedCounter.maxValue === changedCounter.startValue) {
        setError(true);
      } else {
        setError(false);
      }
    }, [changedCounter])

    return (
      <div>
        <span>start value: </span>
        <input
          type="number"
          min={0}
          max={changedCounter.maxValue}
          className={changedCounter.startValue === changedCounter.maxValue ? 'inputRed' : ''}
          value={changedCounter.startValue}
          onChange={onChangeStartValueHandler}
        />
        <span>max value: </span>
        <input
          type="number"
          min={changedCounter.startValue}
          className={changedCounter.startValue === changedCounter.maxValue ? 'inputRed' : ''}
          value={changedCounter.maxValue}
          onChange={onChangeMaxValueHandler}
        />
        <Button
          name="SET"
          isDisabled={changedCounter.startValue >= changedCounter.maxValue}
          onClick={() => dispatch(setChangedCounterAC(changedCounter))} />
      </div>
    );
  }
;