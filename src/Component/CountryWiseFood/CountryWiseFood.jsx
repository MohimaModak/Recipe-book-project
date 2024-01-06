import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const CountryWiseFood = ({ countryWiseInput }) => {
  const [countryWiseFood, setCountryWiseFood] = useState([]);

  const [filterCountryWiseFood, setFilterCountryWiseFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/countryWiseFood")
      .then((res) => res.json())
      .then((data) => {
        setCountryWiseFood(data);
        filterCountryFood(data, countryWiseInput);
      });
  }, [countryWiseInput]);

  const filterCountryFood = (data, countryWiseFood) => {
    if (countryWiseFood == "All") {
      setFilterCountryWiseFood(data);
    } else {
      const filterFoods = data.filter(
        (food) => food.country === countryWiseInput
      );
      setFilterCountryWiseFood(filterFoods);
    }
  };

  return (
    <>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filterCountryWiseFood.map((countryFood) => (
            <Link to={`/countryFoodKid/${countryFood.country}`}>
              <div key={countryFood._id}>
                <div
                  key={countryFood.country}
                  className="border rounded-md relative "
                >
                  <img
                    src={countryFood.food_image}
                    className="rounded-md sm:h-[260px] md:h-[150px] lg:h-[200px] transition-transform transform hover:scale-105"
                    alt={countryFood.category}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center font-bold text-white backdrop-blur-lg opacity-0 hover:opacity-100 ">
                    <h1 className="text-center">{countryFood.country}</h1>
                    <h2 className="text-center">{countryFood.food_name}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountryWiseFood;
