import { Header } from "./components/Header";
import { NoTask } from "./components/NoTask";
import styles from "./App.module.scss";
import { Task } from "./components/Task";
import { v4 as uuidV4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";

export interface TaskProps {
  id: string;
  isDone: boolean;
  task: string;
}

/*
const tasks = [
  { id: uuidV4(), isDone: true, text: "limpar o Quarto" },
  { id: uuidV4(), isDone: false, text: "limpar a casa" },
  { id: uuidV4(), isDone: true, text: "fazer o café" },
  { id: uuidV4(), isDone: false, text: "regar as plantas" },
  { id: uuidV4(), isDone: false, text: "consertar o telhado" },
];
*/

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<TaskProps>({
    id: uuidV4(),
    isDone: false,
    task: "",
  });
  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
  }
  function handleNewTaskChange(event: ChangeEvent<InputEvent>) {
    event.preventDefault();
    setNewTask(event.target.data);
  }

  return (
    <article className={styles.mainPage}>
      <Header />
      <div className={styles.tableTask}>
        <div className={styles.headerTable}>
          <h1 className={styles.createdTask}>
            Tarefas criadas <span>{tasks.length}</span>
          </h1>
          <h1 className={styles.completedTask}>
            Concluídas <span>0 de {tasks.length}</span>
          </h1>
        </div>
      </div>
      {tasks.length > 0 ? (
        <ul className={styles.taskList}>
          {tasks.map((task) => {
            return (
              <Task key={task.id} isDone={task.isDone} taskText={task.task} />
            );
          })}
        </ul>
      ) : (
        <NoTask />
      )}
    </article>
  );
}

/*
i've created this Task for test style reaction to bigger texts
     <Task
          key={5}
          isDone={true}
          taskText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        />
*/
