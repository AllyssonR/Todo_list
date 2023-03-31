import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";
interface TaskProps {
  id: string;
  isDone: boolean;
  taskText: string;
  onDeleteTask: (id: string) => void;
}
export function Task({ id, isDone, taskText, onDeleteTask }: TaskProps) {
  const [checkedTask, setCheckedTask] = useState(isDone);

  function onCheckedChange() {
    setCheckedTask(!checkedTask);
  }
  function handleDeleteTask() {
    onDeleteTask(id);
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
      <button onClick={handleDeleteTask}>
        <Trash size={12} />
      </button>
    </li>
  );
}
