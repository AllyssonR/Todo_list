import { PlusCircle } from "phosphor-react";
import styles from "./AddTesk.module.scss";



export function AddTask() {

  return (
    <form  className={styles.addTesk}>
      <input  type="text" id="task" placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={styles.addButton}>
        Criar <PlusCircle />
      </button>
    </form>
  );
}
