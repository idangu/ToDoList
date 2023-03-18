export interface ITask {
  taskName: string;
  deadline: string;
  priority: string;
}

export enum InputName {
  task = "task",
  deadline = "deadline",
  priority = "priority",
}

export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGHEST = "Highest",
}

export enum ActionsNames {
  ADD_ITEM = "ADD_TODO",
  REMOVE_ALL_TODOS = "REMOVE_ALL_TODOS",
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: ITask }
  | {
      type: "REMOVE_ALL_TODOS";
    };
