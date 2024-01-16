import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="m-10 ">
      <div className="">
        {" "}
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
