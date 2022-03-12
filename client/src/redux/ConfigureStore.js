import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import carsReducer from './features/carsReducer';

const combineReducer = combineReducers({carsReducer});

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;