import { Header } from "./components/Header";
import { NoTask } from "./components/NoTask";
import styles from "./App.module.scss";
import { Task } from "./components/Task";
import { v4 as uuidV4 } from "uuid";
import { FormEvent } from "react";
interface TaskProps {
  id: string;
  isDone: boolean;
  task: string;
}
interface TaskListProps {
  Tasks: TaskProps[];
}

const tasks = [
  { id: uuidV4(), isDone: true, task: "limpar o Quarto" },
  { id: uuidV4(), isDone: false, task: "limpar a casa" },
  { id: uuidV4(), isDone: true, task: "fazer o café" },
  { id: uuidV4(), isDone: false, task: "regar as plantas" },
  { id: uuidV4(), isDone: false, task: "consertar o telhado" },
];

export function App() {
  function handleNewTask(event: FormEvent) {
    event.preventDefault();
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
