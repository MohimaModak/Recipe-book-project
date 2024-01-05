import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const CountryWiseFood = () => {
  const [countryWiseFood, setCountryWiseFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/countryWiseFood")
      .then((res) => res.json())
      .then((data) => setCountryWiseFood(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center p-16">
        Country Wise Food: {countryWiseFood.length}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {countryWiseFood.map((country) => (
          <div key={country.country} className="border rounded-md relative ">
            <img
              src={country.food_image}
              alt={country.food_name}
              className="rounded-md sm:h-[260px] md:h-[150px] lg:h-[200px] transition-transform transform hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center font-bold text-white backdrop-blur-lg opacity-0 hover:opacity-100 ">
              <h1>{country.country}</h1>
              <h2 className="text-center">{country.food_name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryWiseFood;
