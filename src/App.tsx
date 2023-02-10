import { Header } from "./components/Header";
import styles from "./App.module.scss";
import { NoTask } from "./components/NoTask";
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
      <div>
        <NoTask />
      </div>
    </article>
  );
}
