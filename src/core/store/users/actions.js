import { usersAPI } from '../../api';
import { createRESTAPIActions } from '../_helpers';

const usersActions = createRESTAPIActions('USERS', usersAPI);

export const usersGetAll = usersActions.getAll;
export const usersCreate = usersActions.create;
export const usersUpdate = usersActions.update;
export const usersDelete = usersActions.delete;
