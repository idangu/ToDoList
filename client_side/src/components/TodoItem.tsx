import { ITask, Priority } from "../Interface";
import "../App.css";
import styled from "styled-components";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const Button = styled.button`
  flex: 20%;
  height: 100%;
  border: none;
  background-color: lightseagreen;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  cursor: pointer;
`;

const Task = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  color: white;
  margin: 15px;
`;

const Content = styled.div`
  flex: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  display: grid;
  place-items: center;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-right: none;
  background-color: ${(props) => {
    switch (props.color) {
      case Priority.LOW:
        return "#8BC34A";
      case Priority.MEDIUM:
        return "#FFC107";
      case Priority.HIGHEST:
        return "tomato";

      default:
        break;
    }
  }};
`;

const TodoItem = ({ task, completeTask }: Props) => {
  return (
    <Task>
      <Content>
        <Span color={task.priority}>{task.taskName}</Span>
        <Span color={task.priority}>{task.deadline}</Span>
        <Span color={task.priority}>{task.priority}</Span>
        <Span color={task.priority}>{task.tag}</Span>
      </Content>
      <Button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </Button>
    </Task>
  );
};

export default TodoItem;
