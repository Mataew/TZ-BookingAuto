import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carsLoad } from '../redux/features/carsReducer';
import './cars.css'

const Cars = () => {

  const [choose, setChoose] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(carsLoad())
  },[dispatch])

  const cars = useSelector(state => state.carsReducer.cars)


  const daun = () => {
    return (
      <div className="choose">daun</div>
    )
  }

  const chooseCar = () => {
    setChoose(!choose)
  }
  return (
    <div className="main" >
      {cars.map(car => {
        return (
          <>
              <button onClick={() => chooseCar()} className="car" key={car._id}>
                <div>Номера машины: {car.number}</div>
                <div>Число мест в машине: {car.seatNumber}</div>
                <div>Цена за день: {car.dayPrice}</div>
                { choose ? <div className="choose">daun</div> : ''}
              </button>
          </>
        )
      })}
    </div>
  );
};

export default Cars;