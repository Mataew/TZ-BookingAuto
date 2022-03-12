import React from 'react';

const Car = (props) => {

  return (
    <>
      <button
        onClick={props.modalWindow ? '' : () => props.openModalWindow(props.car)}
        className={ props.car.booked ? 'car booked' : "car"}
        key={props.car._id}>
        <div>Номера машины: {props.car.number}</div>
        <div>Число мест в машине: {props.car.seatNumber}</div>
        <div>Цена за день: {props.car.dayPrice}</div>
      </button>
    </>
  );
};

export default Car;