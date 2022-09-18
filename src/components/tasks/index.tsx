import styles from "./tasks.module.scss";
import { ClipboardText } from "phosphor-react";

const Tasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </div>

      <div className={styles.mainCard}>
        <ClipboardText size={32} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <small>Crie tarefas e organize seus itens a fazer</small>
      </div>
    </div>
  );
};

export default Tasks;
