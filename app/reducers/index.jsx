import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import selectedNavReducer from './selectedNav'


const rootReducer = combineReducers({
  selectedNav: selectedNavReducer
});

export default rootReducer;
export * from './selectedNav';
