import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import styles from "./AddTesk.module.scss";
import { v4 as uuidV4 } from "uuid";
interface TaskProps {
  id: string;
  isDone: boolean;
  task: string;
}

export function AddTask() {
  const [newTask, setNewTask] = useState<TaskProps>({
    id: uuidV4(),
    task: "",
    isDone: false,
  });
  function handleNewTask() {}
  return (
    <form className={styles.addTesk}>
      <input type="text" id="task" placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={styles.addButton}>
        Criar <PlusCircle />
      </button>
    </form>
  );
}
