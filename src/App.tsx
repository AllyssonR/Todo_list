import { Header } from "./components/Header";
import styles from "./App.module.scss";
import { Task } from "./components/Task";
const tasks = [
  { id: 1, isDone: true, task: "limpar o Quarto" },
  { id: 2, isDone: false, task: "limpar a casa" },
  { id: 3, isDone: true, task: "fazer o café" },
  { id: 4, isDone: false, task: "regar as plantas" },
  { id: 5, isDone: false, task: "consertar o telhado" },
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
          return <Task key={task.id} isDone={task.isDone} taskText={task.task} />;
        })}
      </ul>
    </article>
  );
}
