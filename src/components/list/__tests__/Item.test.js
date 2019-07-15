import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

const label = 'test';
const url = 'someUrl';
describe('basic rendering tests', () => {
  it('renders without crashing with required props', () => {
    shallow(<Item label={label} />);
  });

  it('renders without crashing with all props', () => {
    shallow(<Item label={label} url={url} />);
  });
});
describe('styling tests', () => {
  it('proper link text rendered', () => {
    const element = shallow(<Item label={label} />);
    expect(element.find('a').text()).toEqual(label);
  });
  it('proper link url href rendered', () => {
    const element = shallow(<Item label={label} url={url} />);
    expect(element.find('a').props().href).toEqual(url);
  });
});
