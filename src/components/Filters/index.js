import React from 'react';
import PropTypes from 'prop-types';

import './filters.scss';

const Filters = ({
  filterLabel, filterList, onSelected, currentSelected, className
}) => {
  return (
    <section className={className}>
      {filterLabel &&
        <p className="label-filter">{filterLabel}</p>
      }
      {filterList.length > 0 && filterList.map(filter => (
        <button
          key={filter.id}
          type="button"
          className={filter.id === currentSelected ? 'active' : 'chip'}
          onClick={() => onSelected(filter.id)}
        >{filter.name}</button>
      ))}
    </section>
  )
}

Filters.propTypes = {
  filterLabel: PropTypes.string,
  filterList: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string
  })),
  onSelected: PropTypes.func,
  currentSelected: PropTypes.string
}

Filters.defaultProps = {
  filterList: [],
  onSelected: () => {}
}

export default Filters