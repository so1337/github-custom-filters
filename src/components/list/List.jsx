import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';


const List = ({ items }) => (
  <div className="list-container">
    <ul className="list">
      {items.map(item => (<Item url={item.html_url} key={item.title} label={item.title} />))}
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
  })),
};

List.defaultProps = {
  items: [],
};


export default List;
