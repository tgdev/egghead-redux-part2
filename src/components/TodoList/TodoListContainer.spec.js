import React from 'react';
import { shallow } from 'enzyme';

import configureStore from '../../configure-store';
import TodoListContainer from './TodoListContainer';

describe('TodoListContainer component', () => {
  const appStore = configureStore();
  const storeContext =  { context: { store: appStore } };

  it('renders TodoListContainer correctly', () => {
    const wrapper = shallow(<TodoListContainer />, storeContext);
    expect(wrapper).toMatchSnapshot();
  });
});
