import { combineReducers } from 'redux';
import { usersGetAll } from './actions';

export default combineReducers({
  isLoading: isLoadingReducer,
  list: listReducer,
});

function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case usersGetAll.START:
      return true;

    case usersGetAll.SUCCESS:
    case usersGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state = [], action) {
  switch (action.type) {
    case usersGetAll.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
