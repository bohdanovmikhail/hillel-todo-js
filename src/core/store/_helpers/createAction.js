export const createAction = type => () => ({ type });
export const createPayloadAction = type => payload => ({ type, payload });
export const createErrorAction = type => error => ({ type, error });
