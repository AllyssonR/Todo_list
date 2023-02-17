import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.scss";
export function Task() {
  const [isTaskDone, setIsTaskDone] = useState(false);
  function onTaskDone(event: any) {
    if (event.target.value === false) {
      setIsTaskDone(true);
    } else {
      setIsTaskDone(false);
    }
  }
  return (
    <li className={styles.content}>
      <input
        type="checkbox"
        name="isTashDone"
        id="isTaskDone"
        onClick={onTaskDone}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
        voluptatum sed nemo aspernatur deleniti soluta maiores architecto
        voluptatibus dolorum dolores, ipsum ipsa, rerum ab ex. Illum deleniti
        obcaecati quibusdam veritatis?
      </p>
      <Trash size={44} />
    </li>
  );
}
