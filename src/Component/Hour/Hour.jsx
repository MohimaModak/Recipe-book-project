import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Hour.css";
import Marquee from "react-fast-marquee";
const Hour = () => {
  const hourlyFood = useLoaderData();
  const [food, setfood] = useState([]);

  useEffect(() => {
    fetch("/Breakfast.json")
      .then((res) => res.json())
      .then((data) => setfood(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl text-center text-orange-300 fooddetails m-5">
        {" "}
        The Clock Flavors
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-2/3 p-5">
          <p className="text-center text-blue-400 foodPara">
            Explore a delicious journey through the day with our hourly food
            selection. From hearty breakfasts to satisfying lunches and
            delectable dinners, we've got your cravings covered from dawn till
            dusk. Join us for a taste adventure!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center shadow-2xl p-16 rounded-md">
        <div>
          <div className="flex justify-center items-center pb-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
              {hourlyFood.map((hour) => {
                return (
                  <div className="back relative shadow-2xl rounded-md h-[180px] w-[200px] hover:h-[240px] transition-all duration-1000">
                    <div className="relative flex justify-center items-center image">
                      <div>
                        <div className="flex justify-center items-center">
                          <img
                            src={hour.food_image}
                            className="p-1.5 shadow-2xl h-[170px] w-[170px] rounded-full transition-all duration-5000 "
                          />
                        </div>
                        <div className="show">
                          <h1 className="text-2xl text-center p-2 timeIcon text-orange-300 font-semibold letter">
                            {hour.Name}
                          </h1>

                          <div className="flex justify-center">
                            <div className="text-center shadow-lg text-blue-300 border rounded-full w-min px-5 py-0.5 font-semibold foodPara">
                              <Link to={`/hourDetails/${hour._id}`}>
                                <button>Recipe</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center">
              <img
                src="https://img.freepik.com/free-photo/cupcake-plate-surrounded-by-fruits_23-2147984215.jpg?w=740&t=st=1706888546~exp=1706889146~hmac=7bad79075dd336827a2ea6fe914cc251932828118df3f02035a46988853886f1"
                className="rounded-md w-full "
              />
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center  text-blue-400 foodPara m-10 flex justify-center items-center inset-0 absolute">
                <div>
                  <h1 className="timeIcon text-orange-300 sm:text-4xl md:text-6xl lg:text-8xl">
                    Foods Clock
                  </h1>
                  <p className="sm:text-sm md:text-xl lg:text-2xl">
                    From Sunrise to Sunset: Explore Our Hourly Food Offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center shadow-2xl p-16 rounded-md">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
          {food.map((hour) => {
            return (
              <div className="back relative shadow-2xl rounded-md h-[180px] w-[200px] hover:h-[360px] transition-all duration-1000">
                <div className="relative flex justify-center items-center image">
                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        src={hour.image}
                        className="h-[170px] w-[170px] rounded-full transition-all duration-5000 p-1.5 shadow-2xl"
                      />
                    </div>
                    <div className="show">
                      <h1 className="text-2xl text-center p-2 timeIcon text-orange-300 font-semibold letter">
                        {hour.foodName}
                      </h1>
                      <h1 className=" text-center p-2 foodPara text-blue-300 letter">
                        {hour.foodRecipe}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hour;
