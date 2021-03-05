import { combineReducers } from 'redux';
import { todoGetAll } from './actions';


export default combineReducers({
  isLoading: isLoadingReducer,
  list: listReducer,
});

function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case todoGetAll.START:
      return true;

    case todoGetAll.SUCCESS:
    case todoGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state = [], action) {
  switch (action.type) {
    case todoGetAll.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
