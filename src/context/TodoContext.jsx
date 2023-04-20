import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, settodo] = useState([]);
  const [done, setDone] = useState([]);
  const [open, setOpen] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/todos");
      if (res.status === 200) {
        settodo(res.data.todos);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateDoneOpen = () => {
    const filterData = todo?.filter((item) => item.isCompleted === true);
    setDone(filterData);
    const filterOpen = todo?.filter((item) => item.isCompleted === false);
    setOpen(filterOpen);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (todo.length > 0) updateDoneOpen();
  }, [todo]);

  const getDoneitem = (item) => {
    item.isCompleted ? setDone(...item) : null;
  };

  const handleMark = (item) => {
    settodo((prevdata) =>
      prevdata.map((data) =>
        data.id === item.id ? { ...data, isCompleted: true } : { ...data }
      )
    );
    setDone((prevData) =>
      prevData.map((data) =>
        data.id === item.id ? { ...data, isCompleted: true } : { ...data }
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todo, handleMark, done, open }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
