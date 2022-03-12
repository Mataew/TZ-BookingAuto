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