import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";
interface TaskProps {
  isDone: boolean;
  taskText: string;
}
export function Task({ isDone, taskText }: TaskProps) {
  return (
    <li className={styles.content}>
      <div className={styles.textAndCheckbox}>
        <input type="checkbox" name="isTaskDone" id="isTaskDone" />
        <h1>{isDone}</h1>
        <p>{taskText}</p>
      </div>
      <button>
        <Trash size={12} />
      </button>
    </li>
  );
}
