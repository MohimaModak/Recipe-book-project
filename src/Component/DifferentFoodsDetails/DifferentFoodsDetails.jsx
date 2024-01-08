import React from "react";
import { useLoaderData } from "react-router-dom";

const DifferentFoodsDetails = () => {
  const differentFoodsLoader = useLoaderData();
  console.log(differentFoodsLoader);
  return (
    <div>
      {differentFoodsLoader.map((different) => {
        return (
          <div className="">
            <div>
              <img
                src={different.image}
                className="rounded-md  sm:w-[400px] md:[500px] lg:w-[550px]"
              />
            </div>
            <div className="">
              <h1 className="font-bold ">
                <span className="font-bold  ">Type Of Food: </span>
                {different.type}
              </h1>
              <h1 className="font-bold ">
                <span className="font-bold ">Name Of Food: </span>
                {different.food_name}
              </h1>
              <h1 className="font-medium ">
                <span className="font-bold ">Recipe Of Food: </span>
                {different.recipe}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DifferentFoodsDetails;
