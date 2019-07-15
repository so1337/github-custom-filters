
import React from 'react';
import PropTypes from 'prop-types';

function Item({
  label, url,
}) {
  return (
    <li className="item">
      <a href={url || '#'} className="label">{label}</a>
    </li>
  );
}
Item.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Item.defaultProps = {
  url: '#',
};
export default Item;
