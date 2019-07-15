import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

describe('basic rendering tests', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
  });
});
