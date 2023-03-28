import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import styles from "./AddTesk.module.scss";
import { Headerprops } from "./Header";
import { v4 as uuidV4 } from "uuid";
export function AddTask({ newTask, setNewTask, setTasks, tasks }: Headerprops) {
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const addTask = {
      id: uuidV4(),
      isDone: false,
      task: event.target.value,
    };
    setNewTask(addTask);
  }
  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks], newTask);
  }
  return (
    <form className={styles.addTesk} onSubmit={handleNewTask}>
      <input
        type="text"
        id="task"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
      />
      <button type="submit" className={styles.addButton}>
        Criar <PlusCircle />
      </button>
    </form>
  );
}
