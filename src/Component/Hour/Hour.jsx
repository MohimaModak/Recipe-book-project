import React from "react";
import { useLoaderData } from "react-router-dom";

const Hour = () => {
  const hourlyFood = useLoaderData();

  return (
    <div>
      <h1>Hour: {hourlyFood.length}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hourlyFood.map((hour) => {
          return (
            <div>
              <img
                src={hour.food_image}
                className="sm:h-[200px] md:h-[200px] lg:h-[300px] "
              />
              <h1>{hour.Name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hour;
