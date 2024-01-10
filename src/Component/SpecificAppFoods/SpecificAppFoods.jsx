import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SpecificAppFoods = () => {
  const specificFoodsLoader = useLoaderData();
  console.log(specificFoodsLoader);

  const handleAppFoodOrder = (food) => {
    axios
      .post("http://localhost:4000/appFoodsOrder", food)
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
                src={specific.food_image
                }
                alt={specific.name}
                className="rounded-t-md w-full md:h-[300px]"
              />
              <div className="p-2 text-center font-bold">
                <h1>{specific.appName}</h1>
                <h1>{specific.Name}</h1>
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
