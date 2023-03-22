import imgTodoList from "../../assets/rocket.svg";
import styles from "./Header.module.scss";
import { AddTask } from "./AddTask";
import { TaskProps } from "../App";
interface HeaderProps {
  setTasks: () => React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
export function Header({ setTasks }: HeaderProps) {
  return (
    <>
      <header className={styles.headerLogo}>
        <img className={styles.imgLogo} src={imgTodoList} alt="Logo todo" />
        <h1 className={styles.logoName}>
          to<span>do</span>
        </h1>
      </header>
      <AddTask setTasks={setTasks} />
    </>
  );
}
