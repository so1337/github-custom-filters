import React from 'react';
import { shallow } from 'enzyme';
import FilteredInput from '../FilterInput';

const name = 'test';
const presetValues = null;
const separator = ',';
const type = 'text';
describe('basic rendering tests', () => {
  const onChange = () => {};
  it('renders without crashing with required props', () => {
    shallow(<FilteredInput name={name} onChange={onChange} />);
  });

  it('renders without crashing with all props', () => {
    shallow(<FilteredInput onChange={onChange} presetValues={presetValues} separator={separator} type={type} name={name} />);
  });
});

describe('event triggering tests', () => {
  it('onChange prop is called when fired "change" event on input', () => {
    let check;
    const onChange = () => {
      check = true;
    };
    const mockedEvent = { target: {} };
    const element = shallow(<FilteredInput name={name} onChange={onChange} />);
    element.find('input').simulate('change', mockedEvent);
    expect(check).toEqual(true);
  });
});
