// src/components/Filter.js
import React from 'react';
import '../App.css'; // Import the CSS file

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <div className="filter-icon">
        <i className="fas fa-filter"></i>
      </div>
      <div className="filter-buttons">
        <button className="filter" onClick={() => setFilter('All')}  style={{ color: filter === 'All' ? 'blue' : 'black' }}>
          <i className="fas fa-list"></i> All
        </button>
        <button className="filter" onClick={() => setFilter('Completed')} style={{ color: filter === 'Completed' ? 'blue' : 'black' }}>
          <i className="fas fa-check-circle"></i> Completed
        </button>
        <button className="filter" onClick={() => setFilter('Pending')} style={{ color: filter === 'Pending' ? 'blue' : 'black' }}>
          <i className="fas fa-circle-notch"></i> Pending
        </button>
      </div>
    </div>
  );
};

export default Filter;
