import axios from "axios";
import { ChangeEvent, FC, SelectHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { addTodo, cleanTodo } from "./action";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { InputName, ITask, Priority } from "./Interface";
import { RootState } from "./reducers";

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.div`
  flex: 30%;
  background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  margin-right: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

const TodoList = styled.div`
  flex: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  overflow-y: auto;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin-right: 5px;
  margin-left: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid grey;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin-right: 5px;
  margin-left: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid grey;
`;

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [priority, setPriority] = useState<string>(Priority.LOW);
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    switch (event.target.name) {
      case InputName.task:
        setTask(event.target.value);
        break;
      case InputName.deadline:
        setDeadline(event.target.value);
        break;
      case InputName.priority:
        setPriority(event.target.value);
        break;

      default:
        break;
    }
  };

  const addTask = (): void => {
    if (task && deadline) {
      const newTask: ITask = {
        taskName: task,
        deadline,
        priority,
      };
      dispatch(addTodo(newTask));
      setDeadline("");
      setTask("");
    } else {
      alert("You need to insert info!");
    }
  };

  const cleanAllTodoList = (): void => {
    if (todoList.length) {
      dispatch(cleanTodo());
    } else {
      alert("You don't have items in list to remove");
    }
  };

  const getQuoteMotivation = async () => {
    const { data } = await axios.get("http://localhost:8000/quotes");
    alert(data);
  };

  const completeTask = (taskNameToRemove: string): void => {};

  return (
    <AppDiv>
      <Header>
        <InputContainer>
          <Input
            type="text"
            value={task}
            name="task"
            onChange={handleChange}
            placeholder="task.."
          />
          <Input
            type="date"
            name="deadline"
            value={deadline}
            onChange={handleChange}
            placeholder="Deadline (inDays).."
          />
          <Select
            name="priority"
            value={priority}
            id="priority"
            onChange={handleChange}
          >
            <option value={Priority.LOW}>{Priority.LOW}</option>
            <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
            <option value={Priority.HIGHEST}>{Priority.HIGHEST}</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <Button onClick={addTask}>Add Task</Button>
          <Button onClick={cleanAllTodoList}>Clean List</Button>
          <Button onClick={getQuoteMotivation}>Give me Motivtion</Button>
        </InputContainer>
      </Header>
      <TodoList>
        {todoList.map((task: ITask, key: number) => {
          return <TodoItem task={task} key={key} completeTask={completeTask} />;
        })}
      </TodoList>
    </AppDiv>
  );
};

export default App;
