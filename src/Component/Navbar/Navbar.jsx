// import { NavLink } from "react-router-dom";
// import photo from "../../assets/Gallery/icon.png";
// import "./Navbar.css";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useContext } from "react";
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("Successfully logged out");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="navfont text-xl text-blue-300">
//       <div className="flex items-center justify-between mb-10 text-center">
//         <div>
//           <img src={photo} className="w-[80px] h-[80px]" />
//         </div>

//         <div>
//           <NavLink
//             to="/"
//             className={`pr-5 ({ isActive, isPending }) =>
//           isPending ? "pending" : isActive ? "active" : ""`}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/addrecipe"
//             className={`pr-5 ({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""`}
//           >
//             Add-Recipe
//           </NavLink>
//           <NavLink
//             to="/recipes"
//             className={`pr-5 ({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""`}
//           >
//             Recipes
//           </NavLink>
//           <NavLink
//             to="/FoodLoan"
//             className={`pr-5 ({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""`}
//           >
//             Food-Loan
//           </NavLink>
//           <NavLink
//             to="/AddToCart"
//             className={`pr-5 ({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""`}
//           >
//             food Loan Summary
//           </NavLink>
//         </div>

//         <div className="flex justify-center items-center">
//           {user ? (
//             <div className="flex justify-center items-center">
//               <h1 className="lowercase">{user.displayName}</h1>
//               <img src={user.photoURL} className="w-10 h-10 p-2 rounded-full" />
//               <div
//                 onClick={handleLogOut}
//                 className="px-3 py-1 mt-3 rounded-full text-blue-400 bg-orange-100"
//               >
//                 <button>SignOut</button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div>
//                 <NavLink
//                   to="/Login"
//                   className={`pr-5 ({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""`}
//                 >
//                   Login
//                 </NavLink>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import photo from "../../assets/Gallery/icon.png";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useContext } from "react";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import "./Navbar.css";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [showNav, setShowNav] = useState(false);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("Successfully logged out");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <nav className="navfont text-orange-300 shadow-lg">
//        <div className="">
//                 <img src={photo} className="w-12 h-12" alt="Logo" />
//               </div>
//       <div className="flex items-center justify-center">
//         <div className="text-2xl">
//           <button onClick={() => setShowNav(!showNav)}>
//             {showNav ? <IoMdClose /> : <IoMdMenu />}
//           </button>
//           <div className={`nav ${showNav ? "block" : "hidden"}`}>
//             <NavLink
//               exact
//               to="/"
//               activeClassName="text-white bg-gray-900"
//               className="px-3 py-2"
//             >
//               Home
//             </NavLink>
//             <br />
//             <NavLink
//               to="/addrecipe"
//               activeClassName="text-white bg-gray-900"
//               className="px-3 py-2"
//             >
//               Add Recipe
//             </NavLink>{" "}
//             <br />
//             <NavLink
//               to="/recipes"
//               activeClassName="text-white bg-gray-900"
//               className="px-3 py-2"
//             >
//               Recipes
//             </NavLink>{" "}
//             <br />
//             <NavLink
//               to="/FoodLoan"
//               activeClassName="text-white bg-gray-900"
//               className="px-3 py-2"
//             >
//               Food Loan
//             </NavLink>{" "}
//             <br />
//             <NavLink
//               to="/AddToCart"
//               activeClassName="text-white bg-gray-900"
//               className="px-3 py-2"
//             >
//               Food Loan Summary
//             </NavLink>
//           </div>
//         </div>

//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex items-center justify-center">

//               <div className="flex items-center justify-center">
//                 {user ? (
//                   <div className="flex items-center">
//                     <h1 className="text-orange-300 mr-3">{user.displayName}</h1>
//                     <img
//                       src={user.photoURL}
//                       className="w-10 h-10 rounded-full"
//                       alt="User Avatar"
//                     />
//                     <button
//                       onClick={handleLogOut}
//                       className="px-4 py-2 text-orange-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md ml-3"
//                     >
//                       Sign Out
//                     </button>
//                   </div>
//                 ) : (
//                   <NavLink
//                     to="/Login"
//                     className="px-4 py-2 text-orange-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md"
//                   >
//                     Login
//                   </NavLink>
//                 )}
//               </div>

//             </div>
//           </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import photo from "../../assets/Gallery/icon.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

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
    <nav className="navfont text-orange-300 py-5">
      <div className=" flex justify-between items-center">
        <div className="">
          <img src={photo} className="w-12 h-12" alt="Logo" />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            {user ? (
              <div className="flex items-center">
                <h1 className="text-orange-300 mr-3">{user.displayName}</h1>
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt="User Avatar"
                />
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 text-orange-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md ml-3"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <NavLink
                to="/Login"
                className="px-4 py-2 text-orange-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md"
              >
                Login
              </NavLink>
            )}
          </div>

          <div className="text-2xl flex items-center justify-center">
            <button onClick={() => setShowNav(!showNav)}>
              {showNav ? <IoMdClose /> : <IoMdMenu />}
            </button>
            <br />
            <div className={`nav bg-orange-50 w-32 h-40 ${showNav ? "block" : "hidden"}`}>
              <NavLink
                exact
                to="/"
                activeClassName="text-white bg-gray-900"
                className="px-3 py-2"
              >
                Home
              </NavLink>
              <br />
              <NavLink
                to="/addrecipe"
                activeClassName="text-white bg-gray-900"
                className="px-3 py-2"
              >
                Add Recipe
              </NavLink>{" "}
              <br />
              <NavLink
                to="/recipes"
                activeClassName="text-white bg-gray-900"
                className="px-3 py-2"
              >
                Recipes
              </NavLink>{" "}
              <br />
              <NavLink
                to="/FoodLoan"
                activeClassName="text-white bg-gray-900"
                className="px-3 py-2"
              >
                Food Loan
              </NavLink>{" "}
              <br />
              <NavLink
                to="/AddToCart"
                activeClassName="text-white bg-gray-900"
                className="px-3 py-2"
              >
                Food Loan Summary
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
