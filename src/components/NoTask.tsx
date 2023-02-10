import ImgClipboard from "../../assets/Clipboard.svg";
import styles from "./NoTash.module.scss";
export function NoTask() {
  return (
    <main className={styles.content}>
      <img src={ImgClipboard} alt="" />
      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </main>
  );
}
