export const selectUsers = state => state.users;
export const selectUsersIsLoading = state => selectUsers(state).isLoading;
export const selectUsersList = state => selectUsers(state).list;
