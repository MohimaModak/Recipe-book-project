import React, { useEffect, useState } from "react";

const CountryWiseFood = () => {
  const [countryWiseFood, setCountryWiseFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/countryWiseFood")
      .then((res) => res.json())
      .then((data) => setCountryWiseFood(data));
  }, []);

  return (
    <div>
      <h1>CountryWiseFood {countryWiseFood.length}</h1>
      <div>
        {countryWiseFood.map((country) => (
          <div key={country.country}>
            <img src={country.food_image} alt="" />
            <h1>{country.country}</h1>
            <h1>{country.food_name}</h1>
            <h1>{country.ingredients}</h1>
            <h1>{country.instructions}</h1>
            <h1>{country.duration}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryWiseFood;
