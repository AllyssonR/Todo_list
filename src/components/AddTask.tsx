import { PlusCircle } from "phosphor-react";
import styles from "./AddTesk.module.scss";
export function AddTask() {
  return (
    <div className={styles.addTesk}>
      <input type="text" id="task" placeholder="Adicione uma nova tarefa" />
      <button className={styles.addButton}>
        Criar <PlusCircle />
      </button>
    </div>
  );
}
