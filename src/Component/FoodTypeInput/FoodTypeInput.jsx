import React, { useState } from "react";
import TypeOfFoods from "../TypeOfFoods/TypeOfFoods";

const FoodTypeInput = () => {
  const [foodType, setFoodType] = useState("All");

  const handleTypeOfFood = (e) => {
    setFoodType(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <h1 className="text-4xl font-bold text-center mb-12">
            Different Type Of Foods
          </h1>
        </label>
        <br />
        <div className="flex justify-center items-center pb-8">
          <select
            onChange={handleTypeOfFood}
            className="border bg-gray-100 px-20 text-xl rounded-full py-1"
            name=""
            id=""
          >
            <option className="font-bold border" value="All">
              All
            </option>
            <option className="font-bold border" value="Healthy">
              Healthy
            </option>
            <option className="font-bold border" value="Vitamin-Rich">
              Vitamin-Rich
            </option>
            <option className="font-bold border" value="Protein-Packed">
              Protein-Packed
            </option>
            <option className="font-bold border" value="Vegetarian">
              Vegetarian
            </option>
            <option className="font-bold border" value="Fiber-Rich">
              Fiber-Rich
            </option>
            <option className="font-bold border" value="Low-Calorie">
              Low-Calorie
            </option>
            <option className="font-bold border" value="Energy-Boosting">
              Energy-Boosting
            </option>
            <option className="font-bold border" value="Non-Vegetarian">
              Non-Vegetarian
            </option>
            <option className="font-bold border" value="Heart-Healthy">
              Heart-Healthy
            </option>
            <option className="font-bold border" value="Detoxifying">
              Detoxifying
            </option>
            <option className="font-bold border" value="Weight Loss">
              Weight Loss
            </option>
            <option className="font-bold border" value="Immune-Boosting">
              Immune-Boosting
            </option>
            <option className="font-bold border" value="Post-Workout Recovery">
              Post-Workout Recovery
            </option>
            <option className="font-bold border" value="Hydrating">
              Hydrating
            </option>
            <option className="font-bold border" value="High-Fiber">
              High-Fiber
            </option>
            <option className="font-bold border" value="Anti-Inflammatory">
              Anti-Inflammatory
            </option>
          </select>
        </div>
        <TypeOfFoods foodType={foodType} />
      </div>
    </div>
  );
};

export default FoodTypeInput;
