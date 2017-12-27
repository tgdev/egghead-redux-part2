export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null ) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Do something to catch errors
    // console.log(e);
  }
};
