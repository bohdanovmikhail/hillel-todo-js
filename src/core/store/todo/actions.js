import { todoAPI } from '../../api';
import { createRESTAPIActions } from '../_helpers';

const todoActions = createRESTAPIActions('TODO', todoAPI);

export const todoGetAll = todoActions.getAll;
export const todoCreate = todoActions.create;
export const todoUpdate = todoActions.update;
export const todoDelete = todoActions.delete;
