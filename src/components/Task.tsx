import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";
interface TaskProps {
  isDone: boolean;
  taskText: string;
}
export function Task({ isDone, taskText }: TaskProps) {
  return (
    <li className={styles.content}>
      <input type="checkbox" name="isTashDone" id="isTaskDone" />
      <h1>{isDone}</h1>
      <p>{taskText}</p>
      <button>
        <Trash size={12} />
      </button>
    </li>
  );
}
