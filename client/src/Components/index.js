import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  bookingCar,
  cancelBookingCar,
  carsLoad,
  carsPriceSortingLoad
} from '../redux/features/carsReducer';
import '../Styles/Cars.css'
import '../Styles/ModalWindow.css'
import Car from './Car/Car';
import ModalWindow from './ModalWindow';
import Sorting from './Sorting';

const Index = () => {

  const [modalWindow, setModalWindow] = useState(false)
  const [infoCarInModalWindow, setInfoCarInModalWindow] = useState({})
  const [isBooking, setIsBooking] = useState(false)
  const [isFiltered, setIsFiltered] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    isFiltered ? dispatch(carsPriceSortingLoad()) : dispatch(carsLoad())
  },[dispatch])

  const cars = useSelector(state => state.carsReducer.cars)

  const openModalWindow = (id) => {
    setModalWindow(true)
    setInfoCarInModalWindow(id)
  }

  const closeModalWindow = () => {
    setModalWindow(false)
  }

  const carBooking = (id) => {
    dispatch(bookingCar(id))
    setIsBooking(!isBooking)
    setModalWindow(false)
  }

  const cancelBooking = (id) => {
    dispatch(cancelBookingCar(id))
    setIsBooking(!isBooking)
  }

  const priceSorting = (e) => {
    if (e.target.value === 'По цене'){
      setIsFiltered(e.target.value)
      dispatch(carsPriceSortingLoad())
    } else{
      setIsFiltered(e.target.value)
      dispatch(carsLoad())
    }
  }

  return (
    <>
      <Sorting priceSorting={priceSorting} />

      <div className="main" >

        {cars.map(car => {
          return <Car car={car} isBooking={isBooking} modalWindow={modalWindow} openModalWindow={openModalWindow} />
        })}

        { modalWindow ?
          <ModalWindow
            closeModalWindow={closeModalWindow}
            infoCarInModalWindow={infoCarInModalWindow}
            isBooking={isBooking}
            cancelBooking={cancelBooking}
            carBooking={carBooking} />
          : ''}
      </div>
    </>
  );
};

export default Index;