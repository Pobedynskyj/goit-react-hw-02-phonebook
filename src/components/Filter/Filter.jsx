import React from 'react';
import s from './Filter.module.css';

export const Filter = ({ value, filterName }) => (
  <div>
    <label>
      <h4>Find contact by name</h4>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={filterName}
      ></input>
    </label>
  </div>
);
