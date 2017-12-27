import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './utils/local-storage';

import todoApp from './reducers/root.reducer';

// overrides empty array default value of state arguement in todos reducer
const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState
);

// only call saveState every 1000ms
// to avoid thrashing localStorage
// every time the store is updated
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}), 1000);

export default store;
