import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Successfully logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

        <div className="flex justify-center items-center">
          {user ? (
            <div className="flex justify-center items-center">
              <h1 className="lowercase">{user.displayName}</h1>
              <img src={user.photoURL} className="w-10 h-10 p-2 rounded-full" />
              <div
                onClick={handleLogOut}
                className="px-3 py-1 m-10 text-white bg-red-700"
              >
                <button>SignOut</button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <NavLink
                  to="/Login"
                  className={`pr-5 ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""`}
                >
                  Login
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
