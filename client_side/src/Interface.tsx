export interface ITask {
  taskName: string;
  deadline: string;
  priority: string;
  tag: string;
}

export enum InputName {
  task = "task",
  deadline = "deadline",
  priority = "priority",
  tag = "tag",
}

export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGHEST = "Highest",
}

export enum ActionsNames {
  ADD_ITEM = "ADD_TODO",
  REMOVE_ALL_TODOS = "REMOVE_ALL_TODOS",
  REMOVE_ITEM = "REMOVE_ITEM",
  FILLTER_TODO_LIST = "FILLTER_TODO_LIST",
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: ITask }
  | {
      type: "REMOVE_ALL_TODOS";
    }
  | { type: "REMOVE_ITEM"; payload: string };
