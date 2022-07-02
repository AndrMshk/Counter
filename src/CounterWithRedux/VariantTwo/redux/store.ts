import { combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer } from './reducer';
import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const stateForVariantTwo = createStore(rootReducer, loadState());

stateForVariantTwo.subscribe(() => {
  saveState({ counter: stateForVariantTwo.getState().counter });
  console.log('render');
});

export type StateType = ReturnType<typeof rootReducer>