import { NavLink } from "react-router-dom";
import photo from "../../assets/Gallery/icon.png";
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
    <div className="navfont text-xl text-blue-300">
      <div className="flex items-center justify-between mb-10 text-center">
        <div>
          <img src={photo} className="w-[80px] h-[80px]" />
        </div>

        <div>
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
            food Loan Summary
          </NavLink>
        </div>

        <div className="flex justify-center items-center">
          {user ? (
            <div className="flex justify-center items-center">
              <h1 className="lowercase">{user.displayName}</h1>
              <img src={user.photoURL} className="w-10 h-10 p-2 rounded-full" />
              <div
                onClick={handleLogOut}
                className="px-3 py-1 mt-3 rounded-full text-blue-400 bg-orange-100"
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
