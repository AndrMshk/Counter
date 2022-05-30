import { AppStateType } from '../store';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counter-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (arr) {
    return undefined;
  }
};

export const saveState = (state: AppStateType) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('counter-state', serializedState)
  } catch {

  }
}