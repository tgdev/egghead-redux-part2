import localStorageMock from './__mocks__/localStorage';
window.localStorage = localStorageMock;

import { loadState, saveState } from './local-storage';

describe('localStorage utils', () => {

  const mockPersistedState = {
    todos: [{
      id: '0',
      text: 'Saved task',
      completed: false
    }]
  };

  describe('loadState()', () => {
    it('Returns undefined if no state item in localStorage', () => {
      loadState();
      const mockSavedData = localStorageMock.getItem('state');

      expect(mockSavedData).toBeUndefined();
    });

    it('gets state from localStorage', () => {
      const mockSerializedState = JSON.stringify(mockPersistedState);
      localStorageMock.setItem('state', mockSerializedState);
      const mockSavedData = loadState();

      expect(mockSavedData).toEqual(mockPersistedState);
    });
  });

  describe('saveState()', () => {
    it('saves state to localStorage', () => {
      saveState(mockPersistedState);
      const mockSavedData = localStorageMock.getItem('state');

      expect(mockSavedData).toBeDefined();
      expect(JSON.parse(mockSavedData)).toEqual(mockPersistedState);

    });
  });

});
