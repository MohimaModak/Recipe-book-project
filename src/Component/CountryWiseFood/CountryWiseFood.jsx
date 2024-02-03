import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import "./CountryWiseFood.css";
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {filterCountryWiseFood.map((countryFood) => (
            <Link to={`/countryFoodKid/${countryFood.country}`}>
              <div key={countryFood._id}>
                <div className="flex justify-center items-center">
                  <div className="shadow-2xl rounded-md back h-[210px] w-[220px] hover:h-[320px] transition-all duration-500">
                    <div key={countryFood.country}>
                      <div className="flex justify-center items-center">
                        <img
                          src={countryFood.food_image}
                          className=" rounded-full w-[200px] h-[200px] transition-transform transform hover:scale-105 image shadow-2xl p-1.5"
                          alt={countryFood.category}
                        />
                      </div>

                      <div className="show">
                        <div className="">
                          <h1 className="text-center fooddetails text-blue-300 text-5xl">
                            {countryFood.country}
                          </h1>
                          <h2 className="text-center text-blue-300 navfont text-xl p-2">
                            {countryFood.food_name}
                          </h2>
                        </div>
                      </div>
                    </div>
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
