import imgTodoList from "../../assets/rocket.svg";
import styles from "./Header.module.scss";
import { AddTask } from "./AddTask";

export function Header() {
  return (
    <>
      <header className={styles.headerLogo}>
        <img className={styles.imgLogo} src={imgTodoList} alt="Logo todo" />
        <h1 className={styles.logoName}>
          to<span>do</span>
        </h1>
      </header>
      <AddTask/>
    </>
  );
}
