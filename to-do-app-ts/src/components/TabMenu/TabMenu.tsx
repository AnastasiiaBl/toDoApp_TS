import styles from "./TabMenu.module.css";

// interface Props {
//     menuActive: string;
//     setMenuActive: (value:string) => void;
// }
interface Props {
  menuActive: "all" | "active" | "completed";
  setMenu: (value: "all" | "active" | "completed") => void;
}

export function TabMenu( {menuActive, setMenu}: Props ) {


    return(
      <div className={styles.menu}>
          <div
            className={styles.menuOption}
            onClick={() => setMenu("all")}
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
            onClick={() => setMenu("active")}
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
            onClick={() => setMenu("completed")}
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
  );
}