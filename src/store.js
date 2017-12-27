import { createStore } from 'redux';

import { loadState, saveState } from './utils/local-storage';

import todoApp from './reducers/root.reducer';

// overrides empty array default value of state arguement in todos reducer
const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
