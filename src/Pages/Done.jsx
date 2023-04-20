import { useTodo } from "../context/TodoContext";
import { Link } from "react-router-dom";

export const Done = () => {
  const { done } = useTodo();
  return (
    <div>
      <h1>Done</h1>
      <h2>Total item done:{done.length}</h2>
      {done.map((item) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
            border: "1px solid black",
            borderRadius: "5px",
            margin: "0.5rem 0.5rem",
            padding: "0.5rem",
          }}
        >
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>Status:{item.isCompleted ? "Done" : "Not Done"}</p>
          <Link to={`/done/${item.id}`}>Expand Todo</Link>
        </li>
      ))}
    </div>
  );
};
