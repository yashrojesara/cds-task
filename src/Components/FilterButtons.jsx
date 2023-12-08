import React, { useState } from 'react';
import '../style.css';

const FilterButtons = ({ setFilter, activeFilter }) => (
  <div className="buttons">
    {['All', 'Branding', 'Design', 'Development'].map((type) => (
      <button
        key={type}
        onClick={() => setFilter(type)}
        className={activeFilter === type ? 'active' : ''}
      >
        {type}
      </button>
    ))}
  </div>
);

export default FilterButtons;
