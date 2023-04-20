import { NavLink } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

export const Header = () => {
  const { done, open } = useTodo();
  return (
    <div>
      <nav>
        <NavLink to="/">Summary</NavLink>||
        <NavLink to="/done">Done:({done.length})</NavLink>||
        <NavLink to="/open">Open:({open.length})</NavLink>
      </nav>
    </div>
  );
};
