import { combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer } from './reducer';
import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const stateForVariantOne = createStore(rootReducer, loadState());

stateForVariantOne.subscribe(() => {
  saveState({ counter: stateForVariantOne.getState().counter });
});

export type StateType = ReturnType<typeof rootReducer>