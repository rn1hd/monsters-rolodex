import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ onSearchChange }) => {
  return <input 
    className='search'
    type='search'
    placeholder='search monsters'
    onChange={onSearchChange}
  />
}