import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Pagination';

const onClick = () => {};
const pagination = {
  prev: 'test',
  next: 'test1',
  last: 'test2',
};
describe('basic rendering tests', () => {
  it('renders without crashing with required props', () => {
    shallow(<Pagination onClick={onClick} />);
  });
  it('renders without crashing with all props', () => {
    shallow(<Pagination pagination={pagination} disabledPagination onClick={onClick} />);
  });
  it('renders all buttons with all pagination links', () => {
    const element = shallow(<Pagination pagination={pagination} onClick={onClick} />);
    expect(element.find('PageButton').length).toEqual(3);
  });
});
