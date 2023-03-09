import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import styles from "./AddTesk.module.scss";
interface TaskProps {
  id: string;
  isDone: boolean;
  task: string;
}

export function AddTask() {
  return (
    <form className={styles.addTesk}>
      <input type="text" id="task" placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={styles.addButton}>
        Criar <PlusCircle />
      </button>
    </form>
  );
}
