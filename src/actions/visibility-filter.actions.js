import { ACTION_SET_VISIBILITY_FILTER } from 'constants/action-types';

export const setVisibilityFilter = filter => ({
  type: ACTION_SET_VISIBILITY_FILTER,
  filter
});
