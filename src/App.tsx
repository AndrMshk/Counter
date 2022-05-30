import React from 'react';
import './App.css';
import { VariantOne } from './VariantOne';
import { VariantTwo } from './VariantTwo';
import { VariantWithReducer } from './VariantWithReducer';
import { Provider } from 'react-redux';
import { store } from './bll/store';
import { storeNew } from './bllNew/store';
import { VariantWithReducerNew } from './VariantWithReducerNew';
import { VariantTwoWithReducer } from './VariantTwo/VariantTwoWithReducer';
import { stateForVariantTwo} from './VariantTwo/redux/store'
import { stateForVariantOne } from './VariantOne/redux/store';
import { VariantOneWithReducer } from './VariantOne/VariantOneWithReducer';


export type typeX = {
  startX: number
  maxX: number
}

function App() {

  return (
    <div className="root">
      <h3>Counter 1: </h3>
      <VariantOne />
      <h3>Counter 2: </h3>
      <VariantTwo />
      {/*<h3>Counter Reducer: </h3>*/}
      {/*<Provider store={store}><VariantWithReducer /></Provider>*/}
      {/*<h3>Counter Reducer New: </h3>*/}
      {/*<Provider store={storeNew}><VariantWithReducerNew /></Provider>*/}
      <h3>Counter 1 with Reducer: </h3>
      <Provider store={stateForVariantOne}><VariantOneWithReducer /></Provider>
      <h3>Counter 2 with Reducer: </h3>
      <Provider store={stateForVariantTwo}><VariantTwoWithReducer /></Provider>
    </div>
  );
}

export default App;



