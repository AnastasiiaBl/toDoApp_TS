import styles from './DeleteButton.module.css';
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    menuActive: string;
    deleteCompleted: () => void;
}

export const DeleteButton: React.FC<Props> = ({ menuActive, deleteCompleted }) => (
    <>
      {menuActive === "completed" && (
        <div className={styles.deleteContainer}>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => deleteCompleted()}
          >
            <MdDeleteOutline />
            <span>Delete all</span>
          </button>
        </div>
      )}
    </>
  );