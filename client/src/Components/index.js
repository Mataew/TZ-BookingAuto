import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  bookingCar,
  carsDateFilteredLoad,
  carsFilteredLoad,
  carsLoad
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
    isFiltered ? dispatch(carsFilteredLoad()) : dispatch(carsLoad())
  },[dispatch])

  const cars = useSelector(state => state.carsReducer.cars)

  const openModalWindow = (car) => {
    setModalWindow(true)
    setInfoCarInModalWindow(car)
  }

  const closeModalWindow = () => {
    setModalWindow(false)
  }

  const carBooking = (id, booked) => {
    dispatch(bookingCar(id, booked))
    setIsBooking(!isBooking)
  }

  const filter = (e) => {
    if (e.target.value === 'По цене'){
      setIsFiltered(e.target.value)
      dispatch(carsFilteredLoad())
    } else{
      setIsFiltered(e.target.value)
      dispatch(carsLoad())
    }
  }


  return (
    <>
      <Sorting filter={filter} />

      <div className="main" >

        {cars.map(car => {
          return <Car car={car} isBooking={isBooking} modalWindow={modalWindow} openModalWindow={openModalWindow} />
        })}

        { modalWindow ?
          <ModalWindow
            closeModalWindow={closeModalWindow}
            infoCarInModalWindow={infoCarInModalWindow}
            isBooking={isBooking}
            carBooking={carBooking} />
          : ''}
      </div>
    </>
  );
};

export default Index;