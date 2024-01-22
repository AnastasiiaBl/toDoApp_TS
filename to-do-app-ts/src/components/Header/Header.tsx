import styles from './Header.module.css';


export const Header: React.FC = () => (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do List</h1>
    </header>
);