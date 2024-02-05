import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './FoodApps.css'
const FoodApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/foodApps")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <div className="p-16 mt-16 rounded-3xl">
    <div className="p-10">
    <h1 className="text-6xl md:text-6xl text-center  fooddetails text-orange-300">
      Food Apps
    </h1>
    <p className="text-center text-blue-400 foodPara text-2xl p-5">Satisfy Your Cravings on a Budget: Explore Wallet-Friendly Food Options with Ease</p>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center justify-center">
      {apps.map((app) => (
        <Link to={`/SpecificAppFoods/${app.appName}`}>
          <div className="">
            <img
              src={app.appImage}
              alt={app.appName}
              className="transition-transform transform hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
  
  );
};

export default FoodApps;
