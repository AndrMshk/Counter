import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer } from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

type AppStoreType = typeof store