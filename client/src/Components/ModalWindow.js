import React from 'react';
import { useSelector } from 'react-redux';

const ModalWindow = (props) => {

  let bookedCar = useSelector(state => state.carsReducer.cars.find(car => car.booked === true))
  console.log(bookedCar)

  return (
    <div className="wrapperModalWindow">
      <div className="modalWindow">
        <button className="closeModalWindow" onClick={() => props.closeModalWindow()}>X</button>
        <div>Название машины: {props.infoCarInModalWindow.name}</div>
        <div>Дата бронирования: {props.infoCarInModalWindow.date}</div>
        { props.isBooking ?
          <>
            <div className="title">ВЫ УЖЕ ЗАБРОНИРОВАЛИ:</div>
            <div>
              {bookedCar.name} с номерами {bookedCar.number}<br/>
              На {bookedCar.date}
            </div>
            <button
              onClick={ () => props.cancelBooking(bookedCar._id, props.isBooking)}
              className="choose decline">Хотите отказаться от брони {bookedCar.name}?</button>
          </>
          :
          <button onClick={ () => props.carBooking(props.infoCarInModalWindow._id, props.isBooking)} className="choose">Забронировать</button>
        }
      </div>
    </div>
  );
};

export default ModalWindow;