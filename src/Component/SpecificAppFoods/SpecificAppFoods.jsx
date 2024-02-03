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
    <div className="flex justify-center items-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
        {specificFoodsLoader.map((specific) => (
          <div key={specific._id}>
            <div className="shadow-2xl rounded-md back h-[220px] w-[250px] hover:h-[430px] transition-all duration-500 back">
              <div className="flex justify-center items-center">
                <div className="">
                  <div className="flex justify-center items-center">
                    <img
                      src={specific.food_image}
                      alt={specific.name}
                      className="h-[200px] w-[200px] rounded-full image"
                    />
                  </div>

                  <div className="p-2 text-center show">
                    <h1 className="timeIcon text-orange-300 text-3xl">
                      {specific.appName}
                    </h1>
                    <h1 className="foodPara text-blue-300 text-xl">
                      {specific.Name}
                    </h1>
                    <h1 className="foodPara text-blue-300 text-xl">
                      {specific.price} $
                    </h1>

                    <form onSubmit={handleUserInfo}>
                      <input
                        type="text"
                        className="text-center text-blue-300 foodPara"
                        name="email"
                        value={user.email}
                        required
                      />
                      <input
                        type="date"
                        name="date"
                        className="text-center text-blue-300 foodPara"
                        required
                      />
                    </form>

                    <div
                      onClick={() => handleAppFoodOrder(specific)}
                      className="border shadow-2xl rounded-full text-center text-orange-300 text-xl font-semibold foodPara px-10 py-1 m-3"
                    >
                      <button>Order Now</button>
                    </div>
                  </div>
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
