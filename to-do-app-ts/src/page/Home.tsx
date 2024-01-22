import { useState } from "react";
import styles from "./home.module.css";
import { TabMenu, AddToDoForm, ToDoList } from "@/components";


export default function Home() {
  const [menuActive, setMenuActive] = useState<"all" | "active" | "completed">(
    "all"
  );
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    var item = {
      id: Math.random().toString() + todo,
      text: todo,
      checked: false,
    };

    setTodoList((prev) => [...prev, item]);
    setTodo("");
  }

  function deleteTodo(id: string) {
    const remainingItems = todoList.filter((item) => item.id !== id);
    setTodoList(remainingItems);
  }

  function deleteCompleted() {
    const remainingItems = todoList.filter((item) => !item.checked);
    setTodoList(remainingItems);
    setMenuActive("all");
  }


  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>#todo</h1>
      </header>
      <main className={styles.main}>
      <TabMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      <AddToDoForm
          menuActive={menuActive}
          addTodo={addTodo}
          handleChange={handleChange}
          todo={todo}
          disabled={!todo}
        />
        <ToDoList
          todoList={todoList}
          menuActive={menuActive}
          reload={reload}
          setReload={setReload}
          deleteTodo={deleteTodo}
        />
      </main>
    </>
  );
}
