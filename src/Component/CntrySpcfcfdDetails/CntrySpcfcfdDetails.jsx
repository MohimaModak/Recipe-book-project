import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BiCopy } from "react-icons/bi";
import Swal from "sweetalert2";

const CntrySpcfcfdDetails = () => {
  const foodDetails = useLoaderData();
  console.log(foodDetails);

  const copyRecipe = () => {
    const copyRecipe = `${foodDetails.food_image}\n\nCountry:\n${foodDetails.country}\n\nFood Name: \n${foodDetails.food_name}\n\nIngredients: \n${foodDetails.ingredients}\n\nInstructions: \n${foodDetails.instructions}\n\nDuration: \n${foodDetails.duration} `;
    navigator.clipboard.writeText(copyRecipe);
    Swal.fire({
      title: "Successfully!",
      text: "Copied the recipe",
      icon: "success",
    });
  };

  const [food, setfood] = useState([]);
  useEffect(() => {
    fetch("/Breakfast.json")
      .then((res) => res.json())
      .then((data) => setfood(data));
  }, []);

  const againCopyRecipe = (recipe) => {
    navigator.clipboard.writeText(recipe);
    Swal.fire({
      title: "Successfully!",
      text: "Copied the recipe",
      icon: "success",
    });
  };

  return (
    <div className="">
      <div className="md:flex justify-center  gap-5">
        <div className="">
          <img src={foodDetails.food_image} className="rounded-md" />
        </div>

        <div className=" lg:w-2/3 lg:ml-5 shadow-2xl p-3 lg:p-5 rounded-md">
          <h1 className="pb-2">
            <span className="text-orange-300 fooddetails text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              {foodDetails.country}
            </span>
          </h1>
          <h1 className="pb-2 pt-5">
            <span className=" text-blue-400  fooddetails text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
              {foodDetails.food_name}
            </span>
          </h1>

          <h1 className="pb-2 pt-5">
            <span className="fooddetails text-4xl text-blue-400">
              Ingredients:{" "}
            </span>{" "}
            <span className="foodPara text-blue-400">
              {foodDetails.ingredients}
            </span>
          </h1>
          <div className="fooddetails text-4xl text-orange-300">
            <button onClick={copyRecipe}>
              <BiCopy />
            </button>
          </div>
        </div>
      </div>
      <h1 className="shadow-2xl p-5 mt-5 rounded-md">
        <span className="fooddetails text-4xl text-blue-400">
          Instructions:{" "}
        </span>{" "}
        <br />
        <span className="text-xl foodPara text-blue-400">
          {foodDetails.instructions}
        </span>
        <h1>
          <span className="fooddetails text-4xl text-blue-400">Duration: </span>{" "}
          <span className=" font-semibold foodPara text-blue-400">
            {foodDetails.duration}
          </span>
        </h1>
      </h1>

      <div>
        <div className="m-24">
          <div className="flex justify-center items-center">
            <h1 className="fooddetails text-orange-300 text-center  text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              More Effortless Recipes for Every Craving
            </h1>
          </div>
          <p className="text-center text-blue-300 foodPara text-xl sm:text-2xl md:text-3xl lg:text-4xl p-5 underline">
            Quick Fixes for Hungry Souls
          </p>
        </div>

        <div className="flex justify-center items-center shadow-2xl p-16 rounded-md ">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {food.map((hour) => {
              return (
                <div className="back relative shadow-2xl rounded-md h-[260px] w-[265px] hover:h-[440px] transition-all duration-1000">
                  <div className="relative flex justify-center items-center image">
                    <div>
                      <div className="flex justify-center items-center">
                        <img
                          src={hour.image}
                          className="h-[250px] w-[250px] rounded-full transition-all duration-5000 p-1.5 shadow-2xl"
                        />
                      </div>
                      <div className="show">
                        <h1 className="text-4xl text-center p-2 timeIcon text-orange-300 font-semibold letter">
                          {hour.foodName}
                        </h1>
                        <h1 className=" text-center p-2 foodPara text-blue-300 letter">
                          {hour.foodRecipe}
                        </h1>
                        <div className="flex justify-center text-orange-300 text-3xl">
                          <button
                            onClick={() =>
                              againCopyRecipe(
                                `${hour.foodName},${hour.foodRecipe},${hour.image}`
                              )
                            }
                          >
                            <BiCopy />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CntrySpcfcfdDetails;
