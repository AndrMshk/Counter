const initialState = { value: 0 };

export type InitialStateType = typeof initialState

type actionType =
  | ReturnType<typeof incAC>
  | ReturnType<typeof resetAC>
  | ReturnType<typeof setFromLocalStorageAC>

export const counterReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
  switch (action.type) {
    case 'INC':
      return { ...state, value: state.value + 1 };
    case 'RESET':
      return { ...state, value: action.payload };
    case 'SET-VALUE-FROM-LOCAL-STORAGE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const incAC = () => ({ type: 'INC' } as const);
export const resetAC = (resetValue: number) => ({ type: 'RESET', payload: resetValue } as const);
export const setFromLocalStorageAC = (fromLocalStorage: number) =>
 ({ type: 'SET-VALUE-FROM-LOCAL-STORAGE', payload: fromLocalStorage } as const)

