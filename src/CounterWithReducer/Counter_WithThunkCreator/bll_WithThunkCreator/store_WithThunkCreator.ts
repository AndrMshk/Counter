import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer } from './reducer_WithThunkCreator';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  counter: counterReducer,
});

// custom useDispatch for dispatch thunks
export type DispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<DispatchType>();

export type AppStateType = ReturnType<typeof rootReducer>

export const storeWithThunkCreator = createStore(rootReducer, applyMiddleware(thunk));
