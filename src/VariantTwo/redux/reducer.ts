export type InitialStateType = typeof initialState

const initialState = {
  value: 0,
  startValue: 0,
  maxValue: 5,
};

type ActionType = IncACType | ResetACType | GetFromLocalStorageACType | SetChangedCounterACType

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

type IncACType = ReturnType<typeof incAC>
type ResetACType = ReturnType<typeof resetAC>
type GetFromLocalStorageACType = ReturnType<typeof getFromLocalStorageAC>
type SetChangedCounterACType = ReturnType<typeof setChangedCounterAC>

export const incAC = () => {
  return { type: 'INC' } as const;
};
export const resetAC = () => {
  return { type: 'RESET' } as const;
};
export const setChangedCounterAC = (changedCounter: InitialStateType) => {
  return { type: 'SET-NEW-COUNTER-VALUES', payload: changedCounter } as const;
};
export const getFromLocalStorageAC = (stateFromLocalStorage: InitialStateType) => {
  return { type: 'GET-FROM-LOCAL-STORAGE', payload: stateFromLocalStorage } as const;
};