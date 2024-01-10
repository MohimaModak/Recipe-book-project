import axios from "axios";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SpecificAppFoods = () => {
  const { user } = useContext(AuthContext);
  const specificFoodsLoader = useLoaderData();
  console.log(specificFoodsLoader);
  const [showmodal, setShowmodal] = useState(false);

  const handleAppFoodOrder = (e) => {
    setShowmodal(true);
  };

  const handleUserInfo = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const date = e.target.date.value;
    const borrowUserInfo = { email, date, ...specificFoodsLoader };
    setShowmodal(false);
    axios
      .post("http://localhost:4000/appFoodsOrder", {
        email: user.email,
        date: borrowUserInfo.date,
        food_image: specificFoodsLoader.food_image,
        appName: specificFoodsLoader.appName,
        quantity: specificFoodsLoader.quantity,
      })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Successfully order confirmed",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while placing the order.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

 

  return (
    <div>
      <h1>SpecificAppFoods {specificFoodsLoader.length}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {specificFoodsLoader.map((specific) => (
          <div key={specific._id}>
            <div className="border bg-gray-50 rounded-md">
              <img
                src={specific.food_image}
                alt={specific.name}
                className="rounded-t-md w-full md:h-[300px]"
              />
              <div className="p-2 text-center font-bold">
                <h1>{specific.appName}</h1>
                <h1>{specific.Name}</h1>

                <form onSubmit={handleUserInfo}>
                  <input
                    type="text"
                    className="border-2 rounded-full"
                    name="email"
                    value={user.email}
                    required
                  />
                  <input type="date" name="date" required />
                </form>

                <div
                  onClick={handleAppFoodOrder}
                  className="border rounded-full bg-white p-1 m-3"
                >
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificAppFoods;
