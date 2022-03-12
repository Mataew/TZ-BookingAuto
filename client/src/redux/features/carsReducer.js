const initialState = {
  cars: [],
}

export default function carsReducer (state = initialState, action) {
  switch (action.type){
    case 'cars/load/fulfilled':
      return{
        ...state,
        cars: action.payload
      }
    case 'cars/update/fulfilled':
      return {
        ...state,
        cars: action.payload
      }
    case 'cars/filter/fulfilled':
      return {
        ...state,
        cars: action.payload.sort((a,b)=> {
          if (a.dayPrice > b.dayPrice) return 1;
          if (a.dayPrice === b.dayPrice) return 0;
          if (a.dayPrice < b.dayPrice) return -1;
        })
      }
    default:
      return state;
  }
}

export const carsLoad = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:7000/cars')
      const cars = await response.json()
      dispatch({type: 'cars/load/fulfilled', payload: cars})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const carsFilteredLoad = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:7000/cars')
      const cars = await response.json()
      console.log(cars)
      dispatch({type: 'cars/filter/fulfilled', payload: cars})
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const bookingCar = (id,booked ) => {
  return async (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        booked: !booked
      })
    }
    try {
      await fetch(`http://localhost:7000/cars/${id}`, options)
      const response = await fetch('http://localhost:7000/cars')
      const cars = await response.json()
      dispatch({type: 'cars/update/fulfilled', payload: cars})
    } catch (e) {
      console.log(e.message)
    }
  }
}