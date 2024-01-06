import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryFoodDetails = () => {
  const foodLoader = useLoaderData();
  console.log(foodLoader);

  return (
    <div>
      <h1>Length Of food: {foodLoader.length}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {foodLoader.length === 0 ? (
          <h1 className="text-center ">No food data available</h1>
        ) : (
          foodLoader.map((food) => (
            <div className="backdrop-blur-md relative" key={food._id}>
              <img src={food.food_image} className="md:h-[600px] rounded-md" />
              <div className="absolute flex opacity-0 hover:opacity-100 text-white hover:backdrop-blur-md justify-center items-center inset-0">
                <div className="text-center p-5">
                  <h1>
                    <span className="font-bold text-xl">Country: </span>
                    {food.country}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Food Name </span>
                    {food.food_name}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Ingredients: </span>
                    {food.ingredients}
                  </h1>
                  <h1>
                    <span className="font-bold text-xl">Instructions: </span>
                    {food.instructions}
                  </h1>
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
