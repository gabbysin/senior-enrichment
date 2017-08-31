import axios from 'axios';

//ACTION TYPES 
const FETCH_ALL_CAMPUSES = 'FETCH_ALL_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS'

//ACTION CREATORS 
export function fetchAllCampuses(allCampuses){
  const action = {type:FETCH_ALL_CAMPUSES, allCampuses}
  return action;
};

export const createNewCampus = (newCampus) => (
  {type:CREATE_CAMPUS, newCampus}); 

// REDUCER 
export default function fetchAllCampusesReducer (state= [], action) {
  switch(action.type) {
    case FETCH_ALL_CAMPUSES: return action.allCampuses;
    case CREATE_CAMPUS: return [...state, action.newCampus]
    default:
      return state;
  }
}

// THUNK 
export function fetchCampuses(){
  return function thunk (dispatch){
    return axios.get('/api/campus')
    .then (res => res.data)
    .then (campuses => {
      const action = fetchAllCampuses(campuses);
      dispatch(action);
    })
  }
}

export function createCampus(formInput){
  return function thunk (dispatch){
    return axios.post('/api/campus', formInput)
    .then ( newCampus =>{
      const action = createNewCampus(newCampus.data);
      dispatch(action);
    })
  }
}
