import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer } from './reducer';
import thunk from 'redux-thunk';
import { loadState, saveState } from './utils/local-storage-utils';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const storeNew = createStore(rootReducer, loadState(), applyMiddleware(thunk));

storeNew.subscribe(() => {
  saveState({ counter: storeNew.getState().counter });
});

type AppStoreType = typeof storeNew
export type AppStateType = ReturnType<typeof rootReducer>
