
import React from 'react';
import PropTypes from 'prop-types';

function PageButton({
  label, onClick, disabled,
}) {
  return (
    <button
      className="page-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
PageButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

PageButton.defaultProps = {
  disabled: false,
};
export default PageButton;
