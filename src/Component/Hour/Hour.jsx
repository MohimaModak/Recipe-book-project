import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Hour = () => {
  const hourlyFood = useLoaderData();

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hourlyFood.map((hour) => {
          return (
            <div className="text-center rounded-md border bg-gray-50">
              <img
                src={hour.food_image}
                className="sm:h-[200px] md:h-[200px] lg:h-[300px] rounded-t-md"
              />
              <h1 className="text-xl font-bold m-3">{hour.Name}</h1>
              <div className="text-center border rounded-full m-3 bg-white font-bold text-xl p-2">
                <Link to={`/hourDetails/${hour._id}`}>
                  <button>Recipe</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hour;
