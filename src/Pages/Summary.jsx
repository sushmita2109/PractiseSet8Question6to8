import { useTodo } from "../context/TodoContext";

export const Summary = () => {
  const { todo, handleMark } = useTodo();
  return (
    <div>
      <h1>Summary</h1>
      {todo.map((item) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
            border: "1px solid black",
            borderRadius: "5px",
            margin: "0.5rem 0.5rem",
            padding: "0.5rem",
            textDecoration: item.isCompleted ? "line-through" : "none",
          }}
        >
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>Status:{item.isCompleted ? "Done" : "Not Done"}</p>
          <button onClick={() => handleMark(item)}>Mark As Done</button>
        </li>
      ))}
    </div>
  );
};
