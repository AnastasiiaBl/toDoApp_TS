import styles from "../page/home.module.css";

interface Props {
    menuActive: string;
    setMenuActive: (value:string) => void;
}

export default function TabMenu( {menuActive, setMenuActive}: Props ) {


    return(
        <div className={styles.menu}>
      <div className={styles.menu}>
          <div
            className={styles.menuOption}
            onClick={() => setMenuActive("all")}
          >
            <span>All</span>
            <div
              className={
                menuActive === "all" ? styles.underlineActive : styles.underline
              }
            ></div>
          </div>

          <div
            className={styles.menuOption}
            onClick={() => setMenuActive("active")}
          >
            <span>Active</span>
            <div
              className={
                menuActive === "active"
                  ? styles.underlineActive
                  : styles.underline
              }
            ></div>
          </div>

          <div
            className={styles.menuOption}
            onClick={() => setMenuActive("completed")}
          >
            <span>Completed</span>
            <div
              className={
                menuActive === "completed"
                  ? styles.underlineActive
                  : styles.underline
              }
            ></div>
          </div>
        </div>
        <hr className={styles.hr} />
    </div>
  );
}