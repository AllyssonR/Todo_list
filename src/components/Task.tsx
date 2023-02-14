import { Trash } from "phosphor-react";
import styles from "./Task.module.scss";
export function Task() {
  return (
    <li className={styles.content}>
      <input type="radio" name="isTashDone" id="isTaskDone" />
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
