import React, { useEffect, useState } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/appFoodsOrder")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div className="flex items-center mt-5">
      {cart.map((item) => (
        <div key={item._id}>
          <div className="py-2 px-4">{item.userEmail}</div>
          <div className="py-2 px-4">
            <img
              src={item.food.food_image}
              alt={item.food.Name}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="py-2 px-4">{item.food.Name}</div>
          <div className="py-2 px-4">{item.food.appName}</div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
