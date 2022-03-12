import React from 'react';
import '../Styles/Sorting.css'

const Sorting = (props) => {
  return (
    <div className="sorting">
      <div className="select_wrapper">
        <select className="select" onChange={(e) => props.filter(e)}>
          <option>По умолчанию</option>
          <option>По цене</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;