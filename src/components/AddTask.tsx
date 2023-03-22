import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import styles from "./AddTesk.module.scss";
import { v4 as uuidV4 } from "uuid";

interface AddTaskProps {
  setTasks: () => void;
}
export function AddTask({ setTasks }: AddTaskProps) {
  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = event.target;
    console.log(newTask);
    setTasks();
  }
  return (
    <form onSubmit={handleNewTask} className={styles.addTesk}>
      <input type="text" id="task" placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={styles.addButton}>
        Criar <PlusCircle />
      </button>
    </form>
  );
}
