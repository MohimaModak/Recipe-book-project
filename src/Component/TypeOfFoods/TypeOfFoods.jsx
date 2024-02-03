import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TypeOfFoods.css"
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
      <div className="cursor-pointer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {filterTypeOfFood.map((type) => {
          return (
            <Link to={`/DifferentFoodsDetails/${type._id}`}>
              <div className="flex justify-center items-center">
                <div className="shadow-2xl back rounded-md back h-[210px] w-[220px] hover:h-[320px] transition-all duration-500">
                  <div className="flex justify-center items-center">
                    <img
                      src={type.image}
                      className="rounded-full w-[200px] h-[200px] transition-transform transform hover:scale-105 image shadow-2xl p-1.5"
                    />
                  </div>

                  <div className="">
                    <div className="flex justify-center items-center show">
                      <div className="text-center p-2 ">
                        <h1 className="timeIcon  text-blue-300 text-3xl">
                          {type.type}
                        </h1>
                        <h1 className="foodPara text-blue-300">
                          {type.food_name}
                        </h1>
                      </div>
                    </div>
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
