import React from 'react';

const ModalWindow = (props) => {
  return (
    <div className="wrapperModalWindow">
      <div className="modalWindow">
        <button className="closeModalWindow" onClick={() => props.closeModalWindow()}>X</button>
        <div>Название машины: {props.infoCarInModalWindow.name}</div>
        <div>Дата бронирования: {props.infoCarInModalWindow.date}</div>
        { props.isBooking ?
          <>
            <div className="title">ВЫ УЖЕ ЗАБРОНИРОВАЛИ</div>
            <button onClick={ () => props.carBooking(props.infoCarInModalWindow._id, props.isBooking)} className="choose decline">Хотите отказаться?</button>
          </>
          :
          <button onClick={ () => props.carBooking(props.infoCarInModalWindow._id, props.isBooking)} className="choose">Забронировать</button>
        }
      </div>
    </div>
  );
};

export default ModalWindow;