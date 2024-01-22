import styles from "../page/home.module.css";

interface Props {
  menuActive: string;
  addTodo: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: string;
  disabled: boolean;
}

export default function AddTodoForm({
  menuActive,
  addTodo,
  handleChange,
  todo,
  disabled,
}: Props) {
  return (
    <>
      {menuActive !== "completed" ? (
        <form onSubmit={addTodo}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="todo"
              placeholder="add details"
              className={styles.input}
              onChange={(event) => handleChange(event)}
              value={todo}
            />
            <button
              type="submit"
              className={styles.addButton}
              disabled={disabled}
            >
              Add
            </button>
          </div>
        </form>
      ) : null}
    </>
  );
}
