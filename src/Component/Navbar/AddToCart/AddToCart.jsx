import React, { useEffect, useState } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/appFoodsOrder")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div className="mt-5">
      <table className="min-w-full border rounded overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">App Name</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id}>
              <td className="py-2 px-4">
                <img
                  src={item.food_image}
                  alt={item.Name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4">{item.Name}</td>
              <td className="py-2 px-4">{item.appName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddToCart;
