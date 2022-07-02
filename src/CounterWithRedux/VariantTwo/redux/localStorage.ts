import { StateType } from './store';

export const loadState = () => {
  const serializedState = localStorage.getItem('counter-variantTwo-with-redux');
  if (serializedState) {
    return JSON.parse(serializedState);
  }
};

export const saveState = (state: StateType) => {
  localStorage.setItem('counter-variantTwo-with-redux', JSON.stringify(state));
};