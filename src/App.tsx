import { Header } from "./components/Header";
import { NoTask } from "./components/NoTask";
import styles from "./App.module.scss";
import { Task } from "./components/Task";
import { useState } from "react";

export interface TaskProps {
  id?: string & any;
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
    id: "",
    isDone: false,
    task: "",
  });
  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOne);
  }
  const concluidTasksCount = tasks.filter((task) => {
    return task.isDone == true;
  });
  console.log(tasks)
  return (
    <article className={styles.mainPage}>
      <Header
        newTask={newTask}
        setNewTask={setNewTask}
        setTasks={setTasks}
        tasks={tasks}
      />
      <div className={styles.tableTask}>
        <div className={styles.headerTable}>
          <h1 className={styles.createdTask}>
            Tarefas criadas <span>{tasks.length}</span>
          </h1>
          <h1 className={styles.completedTask}>
            Concluídas{" "}
            <span>
              {concluidTasksCount.length} de {tasks.length}
            </span>
          </h1>
        </div>
      </div>
      {tasks.length > 0 ? (
        <ul className={styles.taskList}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                isDone={task.isDone}
                taskText={task.task}
                onDeleteTask={deleteTask}
              />
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
