import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';

const itemsEmpty = [];
const items = [{ title: 'test2', url: '/' }, { title: 'test' }];
describe('basic rendering tests', () => {
  it('renders without crashing without items', () => {
    shallow(<List />);
  });

  it('renders without crashing with empty items array', () => {
    shallow(<List items={itemsEmpty} />);
  });

  it('renders without crashing with proper items array', () => {
    shallow(<List items={items} />);
  });
});

describe('list rendering test', () => {
  it('renders proper amount of children when empty items array passed', () => {
    const element = shallow(<List items={itemsEmpty} />);
    expect(element.find('ul').children().length).toEqual(itemsEmpty.length);
  });
  it('renders proper amount of children when proper items array passed', () => {
    const element = shallow(<List items={items} />);
    expect(element.find('ul').children().length).toEqual(items.length);
  });
});
