import React from 'react';
import { shallow } from 'enzyme';

import configureStore from '../../configure-store';

import AddTodoContainer from './AddTodoContainer';

describe('AddTodoContainer component', () => {

  const appStore = configureStore();
  const storeContext =  { context: { store: appStore } };

  it('renders AddTodoContainer correctly', () => {
    const wrapper = shallow(<AddTodoContainer />, storeContext);
    expect(wrapper).toMatchSnapshot();
  });

});
