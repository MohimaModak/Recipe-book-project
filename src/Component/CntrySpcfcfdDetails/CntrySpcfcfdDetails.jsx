import React from "react";
import { useLoaderData } from "react-router-dom";

const CntrySpcfcfdDetails = () => {
  const foodDetails = useLoaderData();
  console.log(foodDetails);
  return (
    <div className="md:flex justify-center">
      <div className="flex justify-center items-center">
        <img src={foodDetails.food_image} className="sm:pb-5 w-[360px] rounded-md" />
      </div>
      <div className=" md:w-2/3 md:pl-9 ">
        <h1 className="pb-2">
          <span className="text-xl font-bold">Food-Name: </span>{" "}
          <span className="text-xl font-semibold">{foodDetails.food_name}</span>
        </h1>
        <h1 className="pb-2">
          <span className="text-xl font-bold">Country: </span>{" "}
          <span className="text-xl font-semibold">{foodDetails.country}</span>
        </h1>
        <h1 className="pb-2">
          <span className="text-xl font-bold">Ingredients: </span>{" "}
          <span className="text-xl font-semibold">
            {foodDetails.ingredients}
          </span>
        </h1>
        <h1 className="pb-2">
          <span className="text-xl font-bold">Instructions: </span>{" "}
          <span className="text-xl font-semibold">
            {foodDetails.instructions}
          </span>
        </h1>
        <h1>
          <span className="text-xl font-bold">Duration: </span>{" "}
          <span className="text-xl font-semibold">{foodDetails.duration}</span>
        </h1>
      </div>
    </div>
  );
};

export default CntrySpcfcfdDetails;
