import { combineReducers } from 'redux';
import { ActionsNames, ITask, TodoAction } from './Interface';

const initialState: ITask[] = [];

export const todosReducer = (
  state: ITask[] = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case ActionsNames.ADD_ITEM:
      return [...state, action.payload];
      case ActionsNames.REMOVE_ALL_TODOS:
        return []
        case ActionsNames.REMOVE_ITEM:
          const todoListAfterItemRemoved = state.filter((item) => item.taskName !== action.payload);
          return todoListAfterItemRemoved

      
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;