import { ITask, TodoAction } from './Interface';

export const addTodo = (todo: ITask): TodoAction => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const cleanTodo = (): TodoAction => {
    return {
      type: 'REMOVE_ALL_TODOS',
    };
  };