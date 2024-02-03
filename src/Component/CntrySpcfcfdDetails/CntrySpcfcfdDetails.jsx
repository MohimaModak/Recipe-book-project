import React from "react";
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
          <div className="fooddetails text-4xl text-blue-400">
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
    </div>
  );
};

export default CntrySpcfcfdDetails;
