import React from "react";
import { useLoaderData } from "react-router-dom";
import "./HourDetails.css";
const HourRecipeDetails = () => {
  const detailsLoader = useLoaderData();
  console.log(detailsLoader);
  return (
    <div className="flex justify-center items-center">
      <div>
        {detailsLoader.map((details) => {
          return (
            <div className=" ">
              <div className="grid md:grid-cols-2 rounded-md pb-10 gap-6 backdrop-blur-md">
                <div>
                  <img src={details.food_image} className="rounded-md" />
                </div>
                <div>
                  <h1 className="text-6xl pt-5 timeIcon pb-5 text-orange-300">
                    {details.Name}
                  </h1>
                  <h1 className="foodPara text-blue-300 text-4xl pb-5">
                   Clock of {details.Hour}
                  </h1>
                  <h1 className="foodPara text-blue-300">
                    {details.instructions}
                  </h1>
                  <h1 className="foodPara text-blue-300">
                    {" "}
                    {details.introductions}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourRecipeDetails;
