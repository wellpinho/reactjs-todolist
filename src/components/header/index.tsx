import styles from "./header.module.scss";
import logo from "./../../../public/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Todo list" />
    </div>
  );
};

export default Header;
