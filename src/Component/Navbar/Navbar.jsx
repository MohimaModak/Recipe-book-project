import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navfont">
      <div className="p-10 text-center">
        <NavLink
          to="/"
          className={`pr-5 ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
        >
          Home
        </NavLink>
        <NavLink
          to="/addrecipe"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Add-Recipe
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
