import React, { useState } from 'react';
import '../Styles/Sorting.css'
import { carsDateFilteredLoad, carsLoad } from '../redux/features/carsReducer';
import { useDispatch } from 'react-redux';

const Sorting = (props) => {

  const [dateInput, setDateInput] = useState('')

  const dispatch = useDispatch()

  const dateFilter = (e) => {
    setDateInput(e.target.value)
    console.log(e.target.value)
    if (e.target.value === ''){
      dispatch(carsLoad())
    } else {
      dispatch(carsDateFilteredLoad(dateInput))
    }
  }

  return (
    <div className="sorting">
      <div className="select_wrapper">
        <select className="select" onChange={(e) => props.priceSorting(e)}>
          <option>По умолчанию</option>
          <option>По цене</option>
        </select>
      </div>
      <input placeholder="Поиск по датам" value={dateInput} onChange={(e) => dateFilter(e)} className="filterDate" type="text"/>
    </div>
  );
};

export default Sorting;