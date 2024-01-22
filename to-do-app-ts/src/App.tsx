import styles from './App.module.css';
import { useState, useEffect } from "react";
import { Header, TabMenu, AddToDoForm, ToDoList, DeleteButton } from "./components";

function App() {
  const [menuActive, setMenuActive] = useState<"all" | "active" | "completed">("all");
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  function setMenu(value: "all" | "active" | "completed") {
    setMenuActive(value);
    console.log(todoList)
  } 

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let item = {
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

  useEffect(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList, reload]);

  return (
    <>
      <Header/>
      <main className={styles.main}>
      <TabMenu menuActive={menuActive} setMenu={setMenu} />
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
        <DeleteButton
          menuActive={menuActive}
          deleteCompleted={deleteCompleted}
        />
      </main>
    </>
  );
}

export default App;
