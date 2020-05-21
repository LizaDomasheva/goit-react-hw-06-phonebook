import React from 'react';
import styles from '../filter/filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, filterContact }) => (
  <>
    <h3 className={styles.title}>Find contacts by name</h3>
    <input
      className={styles.input}
      value={filter}
      onChange={e => filterContact(e.target.value)}
    ></input>
  </>
);

Filter.proptTypes = {
  filter: PropTypes.string,
  filterContact: PropTypes.func,
};

export default Filter;
