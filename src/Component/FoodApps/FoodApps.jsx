import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/foodApps")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <div className="border shadow-2xl p-16 mt-16 rounded-3xl">
    <h1 className="font-bold text-6xl md:text-5xl text-center mb-8">
      Food Apps
    </h1>
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
