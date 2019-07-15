import React from 'react';
import { shallow } from 'enzyme';
import PageButton from '../PageButton';

const label = 'test';

describe('basic rendering tests', () => {
  const onClick = () => {};
  it('renders without crashing ', () => {
    shallow(<PageButton label={label} onClick={onClick} />);
  });
});

describe('event triggering tests', () => {
  it('onClick prop is called when fired "click" event on input', () => {
    let check;
    const onClick = () => {
      check = true;
    };
    const mockedEvent = { target: {} };
    const element = shallow(<PageButton label={label} onClick={onClick} />);
    element.find('button').simulate('click', mockedEvent);
    expect(check).toEqual(true);
  });
});
