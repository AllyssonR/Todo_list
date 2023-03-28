import imgTodoList from "../../assets/rocket.svg";
import styles from "./Header.module.scss";
import { AddTask } from "./AddTask";
import { TaskProps } from "../App";
export interface Headerprops {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  newTask: TaskProps;
  setNewTask: React.Dispatch<React.SetStateAction<TaskProps>>;
  tasks: TaskProps[];
}
export function Header({ newTask, setNewTask, setTasks, tasks }: Headerprops) {
  return (
    <>
      <header className={styles.headerLogo}>
        <img className={styles.imgLogo} src={imgTodoList} alt="Logo todo" />
        <h1 className={styles.logoName}>
          to<span>do</span>
        </h1>
      </header>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
}
