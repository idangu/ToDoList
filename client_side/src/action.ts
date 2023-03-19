import { ITask, TodoAction } from './Interface';

export const addTodo = (todo: ITask): TodoAction => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const removeItem = (taskNameToRemove: string): TodoAction => {
  return {
    type: 'REMOVE_ITEM',
    payload: taskNameToRemove
  };
};

export const cleanTodo = (): TodoAction => {
    return {
      type: 'REMOVE_ALL_TODOS',
    };
  };
