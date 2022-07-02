import React from 'react';
import './App.css';
import { VariantOne } from '../CounterSimple/VariantOne';
import { VariantTwo } from '../CounterSimple/VariantTwo';
import { Provider } from 'react-redux';
import { stateForVariantOne } from '../CounterWithRedux/VariantOne/redux/store';
import { stateForVariantTwo } from '../CounterWithRedux/VariantTwo/redux/store';
import { CounterWithReducerVariant2 } from '../CounterWithRedux/VariantTwo/CounterWithReducerVariant2';
import { CounterWithReducerVariant1 } from '../CounterWithRedux/VariantOne/CounterWithReducerVariant1';
import { storeWithActionCreator } from '../CounterWithReducer/Counter_WithActionCreator/bll_WithActionCreator/store_WithActionCreator';
import { storeWithThunkCreator } from '../CounterWithReducer/Counter_WithThunkCreator/bll_WithThunkCreator/store_WithThunkCreator';
import { CounterWithThunkCreator } from '../CounterWithReducer/Counter_WithThunkCreator/Counter_WithThunkCreator';
import { CounterWithActionCreator } from '../CounterWithReducer/Counter_WithActionCreator/Counter_WithActionCreator';

export type typeX = {
  startX: number
  maxX: number
}

function App() {
  return (
    <div className="root">
      <h3>Counter 1 with useState: </h3>
      <VariantOne />
      <h3>Counter 2 with useState: </h3>
      <VariantTwo />
      <hr style={{ width: '100%' }} />
      {/*<h3>Counter ThunkCreator with Reducer: </h3>*/}
      {/*<Provider store={storeWithThunkCreator}><CounterWithThunkCreator /></Provider>*/}
      {/*<hr style={{ width: '100%' }} />*/}
      {/*<h3>Counter ActionCreator with Reducer: </h3>*/}
      {/*<Provider store={storeWithActionCreator}><CounterWithActionCreator /></Provider>*/}
      {/*<hr style={{ width: '100%' }} />*/}
      <h3>Counter 1 with Reducer: </h3>
      <Provider store={stateForVariantOne}><CounterWithReducerVariant1 /></Provider>
      <h3>Counter 2 with Reducer: </h3>
      <Provider store={stateForVariantTwo}><CounterWithReducerVariant2 /></Provider>
    </div>
  );
}

export default App;



