import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";
interface TaskProps {
  isDone: boolean;
  task: string;
}
export function Task({ isDone, task }: TaskProps) {
  return (
    <li className={styles.content}>
      <input type="checkbox" name="isTashDone" id="isTaskDone" />
      <h1>{isDone}</h1>
      <p>{task}</p>
      <Trash size={44} />
    </li>
  );
}
