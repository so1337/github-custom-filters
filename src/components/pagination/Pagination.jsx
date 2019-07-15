
import React from 'react';
import PropTypes from 'prop-types';
import PageButton from './PageButton';

function Pagination({
  pagination, onClick, disabledPagination,
}) {
  return (
    <div className="pagination-block">
      {!!Object.keys(pagination).length && (<span>Pages:</span>)}
      {pagination.prev && (
      <PageButton
        disabled={disabledPagination}
        onClick={() => {
          onClick({ url: pagination.prev });
        }}
        label="Prev"
      />
      )}
      {pagination.next && (
      <PageButton
        disabled={disabledPagination}
        onClick={() => {
          onClick({ url: pagination.next });
        }}
        label="Next"
      />
      )}
      {pagination.last && (
      <PageButton
        disabled={disabledPagination}
        onClick={() => {
          onClick({ url: pagination.last });
        }}
        label="Last"
      />
      )}
    </div>
  );
}
Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabledPagination: PropTypes.bool,
  pagination: PropTypes.shape({
    next: PropTypes.string,
    prev: PropTypes.string,
    last: PropTypes.string,
  }),
};

Pagination.defaultProps = {
  pagination: {},
  disabledPagination: false,
};
export default Pagination;
