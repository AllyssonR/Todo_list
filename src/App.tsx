import { Header } from "./components/Header";
import styles from "./App.module.scss";
import { Task } from "./components/Task";
import { v4 as uuidV4 } from "uuid";
const tasks = [
  { id: uuidV4(), isDone: true, task: "limpar o Quarto" },
  { id: uuidV4(), isDone: false, task: "limpar a casa" },
  { id: uuidV4(), isDone: true, task: "fazer o café" },
  { id: uuidV4(), isDone: false, task: "regar as plantas" },
  { id: uuidV4(), isDone: false, task: "consertar o telhado" },
];
export function App() {
  return (
    <article className={styles.mainPage}>
      <Header />
      <div className={styles.tableTask}>
        <div className={styles.headerTable}>
          <h1 className={styles.createdTask}>
            Tarefas criadas <span>{tasks.length}</span>
          </h1>
          <h1 className={styles.completedTask}>
            Concluídas <span>0</span>
          </h1>
        </div>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => {
          return (
            <Task key={task.id} isDone={task.isDone} taskText={task.task} />
          );
        })}
      </ul>
    </article>
  );
}
