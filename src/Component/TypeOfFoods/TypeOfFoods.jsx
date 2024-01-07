import React, { useEffect, useState } from "react";

const TypeOfFoods = () => {
  const [typeOfFood, setTypeOfFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/typeOfFood")
      .then((res) => res.json())
      .then((data) => setTypeOfFood(data));
  }, []);

  return (
    <div>
      <h1>Type Of Foods: {typeOfFood.length}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {typeOfFood.map((type) => {
          return (
            <div>
              <img src={type.image} alt="" />
              <h1>{type.type}</h1>
              <h1>{type.food_name}</h1>
              <h1>{type.recipe}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypeOfFoods;
