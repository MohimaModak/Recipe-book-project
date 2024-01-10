import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CountryFoodDetails = () => {
  const foodLoader = useLoaderData();
  console.log(foodLoader);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.isArray(foodLoader) && foodLoader.length === 0 ? (
          <h1 className="text-center">No food data available</h1>
        ) : (
          Array.isArray(foodLoader) &&
          foodLoader.map((food) => (
            <div className="backdrop-blur-md relative" key={food._id}>
              <img src={food.food_image} className="md:h-[550px] rounded-md" />
              <div className="absolute flex opacity-0 hover:opacity-100 text-white hover:backdrop-blur-md justify-center items-center inset-0">
                <div className="text-center p-5">
                  <h1 className="font-semibold text-xl text-center">
                    <span className="font-bold text-xl">Country: </span>
                    {food.country}
                  </h1>
                  <h1 className="font-semibold text-xl text-center">
                    <span className="font-bold text-xl ">Food Name: </span>
                    {food.food_name}
                  </h1>
                  <Link to={`/details/${food._id}`}>
                    <div className="border text-center rounded-full p-2 m-5">
                      <button>Details</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CountryFoodDetails;
