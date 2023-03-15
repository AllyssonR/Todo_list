import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";
interface TaskProps {
  isDone: boolean;
  taskText: string;
}
export function Task({ isDone, taskText }: TaskProps) {
  const [checked, setChecked] = useState(isDone);
  function onCheckedChange() {
    setChecked(!checked);
  }
  return (
    <li className={styles.content}>
      <div className={styles.textAndCheckbox}>
        <input
          type="checkbox"
          name="isTaskDone"
          id="isTaskDone"
          onClick={onCheckedChange}
        />

        {checked ? <p>{taskText}</p> : <s>{taskText}</s>}
      </div>
      <button>
        <Trash size={12} />
      </button>
    </li>
  );
}
