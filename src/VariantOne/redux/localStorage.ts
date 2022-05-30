import { StateType } from './store';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counter-variantOne-with-redux');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (arr) {
    return undefined;
  }
};


export const saveState = (state: StateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('counter-variantOne-with-redux', serializedState)
  } catch {}
};