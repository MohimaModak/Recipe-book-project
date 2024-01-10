import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navfont">
      <div className="mb-10 text-center">
        <NavLink
          to="/"
          className={`pr-5 ({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""`}
        >
          Home
        </NavLink>
        <NavLink
          to="/addrecipe"
          className={`pr-5 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          Add-Recipe
        </NavLink>
        <NavLink
          to="/recipes"
          className={`pr-5 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/FoodLoan"
          className={`pr-5 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          Food-Loan
        </NavLink>
        <NavLink
          to="/AddToCart"
          className={`pr-5 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          Add To Cart
        </NavLink>
        <NavLink
          to="/Login"
          className={`pr-5 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
