import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";
interface TaskProps {
  isDone: boolean;
  taskText: string;
}
export function Task({ isDone, taskText }: TaskProps) {
  const [checkedTask, setCheckedTask] = useState(isDone);

  function onCheckedChange() {
    setCheckedTask(!checkedTask);
  }
  return (
    <li className={styles.content}>
      <div className={styles.textAndCheckbox}>
        <input
          type="checkbox"
          name="isTaskDone"
          id="isTaskDone"
          checked={checkedTask}
          onChange={onCheckedChange}
        />

        {checkedTask ? <s>{taskText}</s> : <p>{taskText}</p>}
      </div>
      <button>
        <Trash size={12} />
      </button>
    </li>
  );
}
