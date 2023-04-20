import { useParams } from "react-router-dom";
import { useTodo } from "../context/TodoContext";
export const ToDoDesc = () => {
  const { doneId } = useParams();
  const { done } = useTodo();

  return (
    <div>
      <h1>ToDo description</h1>
      {done
        ?.filter((item) => item.id === doneId)
        .map((doneitem) => (
          <div key={doneitem.id}>
            <p>Title:{doneitem.title}</p>
            <p>Description:{doneitem.description}</p>
            <p>Status:{doneitem.isCompleted ? "Done" : "Not Done"}</p>
          </div>
        ))}
    </div>
  );
};
