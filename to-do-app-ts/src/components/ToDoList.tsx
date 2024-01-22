import ToDo from "./ToDo";


interface Props {
  todoList: Todo[];
  menuActive: string;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTodo: (id: string) => void;
}

export default function ToDoList({
  todoList,
  menuActive,
  reload,
  setReload,
  deleteTodo,
}: Props) {
  const filteredTodoList = todoList.filter((item) => {
    return (
      (menuActive === "completed" && item.checked) ||
      (menuActive === "active" && !item.checked) ||
      menuActive === "all"
    );
  });

  return (
    <>
      {filteredTodoList.map((item) => (
        <ToDo
          key={item.id}
          menuActive={menuActive}
          todo={item}
          reload={reload}
          setReload={setReload}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
}
