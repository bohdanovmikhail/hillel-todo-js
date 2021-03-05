export const selectToDo = state => state.todo;
export const selectToDoIsLoading = state => selectToDo(state).isLoading;
export const selectToDoList = state => selectToDo(state).list;
