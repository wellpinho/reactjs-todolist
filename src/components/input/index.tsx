import styles from "./input.module.scss";
import { PlusCircle } from "phosphor-react";

const Input = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adcione uma nova tarefa..." />
      <button>
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  );
};

export default Input;
