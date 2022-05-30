const initialState = {
  value: 0, // if object :   as UserType
};

export type InitialStateType = typeof initialState

type actionType = incACType | resetACType | setFromLocalStorageACType

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

type incACType = ReturnType<typeof incAC>
type resetACType = ReturnType<typeof resetAC>
type setFromLocalStorageACType = ReturnType<typeof setFromLocalStorageAC>

export const incAC = () => {
  return { type: 'INC' } as const;
};

export const resetAC = (resetValue: number) => {
  return { type: 'RESET', payload: resetValue } as const;
};

export const setFromLocalStorageAC = (fromLocalStorage: number) => {
  return { type: 'SET-VALUE-FROM-LOCAL-STORAGE', payload: fromLocalStorage } as const;
};
