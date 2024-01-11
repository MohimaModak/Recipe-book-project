import axios from "axios";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SpecificAppFoods = () => {
  const { user } = useContext(AuthContext);
  const specificFoodsLoader = useLoaderData();
  console.log(specificFoodsLoader);

  const [userInfo, setUserInfo] = useState({ email: "", date: "" });

  const handleUserInfo = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const date = e.target.date.value;
    setUserInfo({ email, date });
    console.log(userInfo);
  };

  const handleAppFoodOrder = (food) => {
    axios
      .post("http://localhost:4000/appFoodsOrder", {
        userEmail: user.email,
        food,
      })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Successfully order confirmed",
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
                  onClick={() => handleAppFoodOrder(specific)}
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
