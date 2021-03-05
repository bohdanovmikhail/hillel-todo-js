import { createRequestAction } from './createRequestAction';


export function createRESTAPIActions(baseActionType, api) {
  const getAllAction = createRequestAction(baseActionType + '/GET_ALL', () => api.getAll());
  const createAction = createRequestAction(baseActionType + '/CREATE', item => api.create(item));
  const updateAction = createRequestAction(baseActionType + '/CREATE', item => api.update(item));
  const deleteAction = createRequestAction(baseActionType + '/CREATE', item => api.delete(item));

  return {
    getAll: getAllAction,
    create: createAction,
    update: updateAction,
    delete: deleteAction,
  };
}
