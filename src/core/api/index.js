import { TodoAPI } from './TodoAPI';
import { UsersAPI } from './UsersAPI';

export const todoAPI = new TodoAPI();
export const usersAPI = new UsersAPI();

export function initAPI(baseOptions) {
  todoAPI.init(baseOptions);
  usersAPI.init(baseOptions);
}

