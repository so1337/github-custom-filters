import React, { useState, useEffect } from 'react';
import { getItems } from '../../services/api';
import { parseHeaderLinks } from '../../helpers/formatter';
import { debounce } from '../../helpers/utils';
import List from '../../components/list/List';
import FilterInput from '../../components/filter/FilterInput';
import Pagination from '../../components/pagination/Pagination';

// filter list config
const filtersList = [{
  type: 'text',
  name: 'milestone',
  presetValues: ['none', '*'],
}, {
  type: 'radio',
  name: 'state',
  presetValues: ['open', 'closed', 'all'],
}, {
  type: 'text',
  presetValues: ['none', '*'],
  name: 'assignee',
}, {
  type: 'text',
  name: 'creator',
}, {
  type: 'text',
  name: 'mentioned',
}, {
  type: 'badges',
  separator: ',',
  name: 'labels',
}, {
  type: 'radio',
  name: 'sort',
  presetValues: ['created', 'updated', 'comments'],
}, {
  type: 'radio',
  name: 'direction',
  presetValues: ['asc', 'desc'],
}, {
  name: 'since',
  type: 'date',
}];


function Main() {
  // issues list
  const [items, setItems] = useState([]);
  // filter values
  const [filter, setFilter] = useState({});
  // loading data indication
  const [dataLoadIndicator, setDataLoadIndicator] = useState(false);
  // pagination data
  const [pagination, setPagination] = useState({ next: null, prev: null, last: null });

  async function fetchData(params = {}) {
    try {
      // disable pagination and show loading text
      setDataLoadIndicator(true);
      const data = await getItems(params);
      // enable pagination and hide loading text
      setDataLoadIndicator(false);
      setItems(data.body);
      setPagination(parseHeaderLinks(data.headers.link));
    } catch (e) {
      // Github request throws 40x errors if issues not found - so we're handling it as empty array in state.
      // I could pinpoint each of errors and on really bad ones throw error, but there's probably a lot of them to cover
      // so lets assume all error will be handled like that for now
      setItems([]);
      setPagination({});
      console.error(e);
    }
  }
  // handle items page change
  function handlePagination({ url }) {
    fetchData({ query: filter, url });
  }

  // handle filter input change
  function onFilterChange({ key, value }) {
    const updatedFilter = { ...filter, [key]: value };
    if (!value) {
      delete updatedFilter[key];
    }
    setFilter(updatedFilter);
    fetchData({ query: updatedFilter });
  }

  // fetch data on mounting
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }, []);

  return (
    <div className="main">
      <h1 className="title">Github issues</h1>
      <div className="container">
        <div className="filters-block">
          {filtersList.map(({
            separator, presetValues, type, name,
          }) => (
            <FilterInput
              key={name}
              name={name}
              separator={separator}
              onChange={debounce(onFilterChange, 700)}
              presetValues={presetValues}
              type={type}
            />
          ))}
        </div>
        <div className="list-block">
          <List
            items={items}
          />
          <Pagination disabledPagination={dataLoadIndicator} pagination={pagination} onClick={handlePagination} />
        </div>
      </div>
      {dataLoadIndicator && <p className="data-load-text">Loading...</p>}
    </div>
  );
}

export default Main;
