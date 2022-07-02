export type InitialStateType = typeof initialState

const initialState = {
  value: 0,
  startValue: 0,
  maxValue: 5,
};

type ActionType =
  | ReturnType<typeof incAC>
  | ReturnType<typeof resetAC>
  | ReturnType<typeof getFromLocalStorageAC>
  | ReturnType<typeof setChangedCounterAC>

export const counterReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'INC':
      return { ...state, value: state.value + 1 };
    case 'RESET':
      return { ...state, value: state.startValue };
    case 'SET-NEW-COUNTER-VALUES':
    case 'GET-FROM-LOCAL-STORAGE':
      return { ...action.payload };
    default:
      return state;
  }
};

export const incAC = () => ({ type: 'INC' } as const);
export const resetAC = () => ({ type: 'RESET' } as const);
export const setChangedCounterAC = (changedCounter: InitialStateType) => (
  { type: 'SET-NEW-COUNTER-VALUES', payload: changedCounter } as const);
export const getFromLocalStorageAC = (stateFromLocalStorage: InitialStateType) => (
  { type: 'GET-FROM-LOCAL-STORAGE', payload: stateFromLocalStorage } as const);