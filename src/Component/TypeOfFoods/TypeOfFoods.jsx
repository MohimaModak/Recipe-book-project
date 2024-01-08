import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TypeOfFoods = ({ foodType }) => {
  const [typeOfFood, setTypeOfFood] = useState([]);
  const [filterTypeOfFood, setfilterTypeOfFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/typeOfFood")
      .then((res) => res.json())
      .then((data) => {
        setTypeOfFood(data);
        differTypesFood(data, foodType);
      });
  }, [foodType]);

  const differTypesFood = (data, foodType) => {
    if (foodType == "All") {
      setfilterTypeOfFood(data);
    } else {
      const diverseFood = data.filter((food) => food.type == foodType);
      setfilterTypeOfFood(diverseFood);
    }
  };

  return (
    <div>
      <div className="cursor-pointer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterTypeOfFood.map((type) => {
          return (
            <Link to={`/DifferentFoodsDetails/${type._id}`}>
              <div className="relative">
                <img
                  src={type.image}
                  className="sm:w-200 md:h-180 lg:h-190 rounded-md md:w-260 lg:w-300 hover:scale-150"
                />

                <div className="flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 backdrop-blur-xl transition-transform  duration-500">
                  <div className="text-center font-bold p-2 text-white">
                    <h1>{type.type}</h1>
                    <h1>{type.food_name}</h1>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TypeOfFoods;
