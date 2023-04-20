import { useTodo } from "../context/TodoContext";

export const Open = () => {
  const { open } = useTodo();
  return (
    <div>
      <h1>Open</h1>
      <h2>Total item open:{open.length}</h2>
      {open.map((item) => (
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
        </li>
      ))}
    </div>
  );
};
