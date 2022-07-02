import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer } from './reducer_WithActionCreator';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

// utilsFunction for save/load from local-storage
export const loadState = () => {
  const serializedState = localStorage.getItem('counter-state');
  if (serializedState) {
    return JSON.parse(serializedState);
  }
};
export const saveState = (state: AppStateType) => {
  localStorage.setItem('counter-state', JSON.stringify(state));
};

export const storeWithActionCreator = createStore(rootReducer, loadState(), applyMiddleware(thunk));

//method for saving values to local-storage by subscribe
storeWithActionCreator.subscribe(() => {
  saveState({ counter: storeWithActionCreator.getState().counter });
});
