import { Header } from "./components/Header";
import styles from "./App.module.scss";
import { Task } from "./components/Task";
const tasks = [
  { isDone: true, task: "limpar o Quarto" },
  { isDone: false, task: "limpar a casa" },
  { isDone: true, task: "fazer o café" },
  { isDone: false, task: "regar as plantas" },
  { isDone: false, task: "consertar o telhado" },
];
export function App() {
  return (
    <article className={styles.mainPage}>
      <Header />
      <div className={styles.tableTask}>
        <div className={styles.headerTable}>
          <h1 className={styles.createdTask}>
            Tarefas criadas <span>0</span>
          </h1>
          <h1 className={styles.completedTask}>
            Concluídas <span>0</span>
          </h1>
        </div>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => {
          return <Task isDone={task.isDone} task={task} />;
        })}
      </ul>
    </article>
  );
}
