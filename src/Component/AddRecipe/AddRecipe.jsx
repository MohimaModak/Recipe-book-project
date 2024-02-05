import React from "react";
import video from "../../assets/Gallery/nodols.mp4";
import axios from "axios";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const handleAddRecipe = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const ingredients = e.target.ingredients.value;
    const instructions = e.target.instructions.value;
    const duration = e.target.duration.value;

    const addedRecipe = {
      name,
      photo,
      ingredients,
      instructions,
      duration,
    };
    console.log(addedRecipe);

    axios.post("http://localhost:4000/addRecipe", addedRecipe).then((data) => {
      console.log(data.data);
      Swal.fire({
        title: "Wow",
        text: "Successfully added",
        confirmButtonText: "Okay",
      });
    });
  };

  return (
    <div className=" bg-gray-50 p-16">
      <div className="sm:gap-10 md:flex items-center justify-evenly">
        <div>
          <img
            src="https://images.pexels.com/photos/2611824/pexels-photo-2611824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-3xl mb-6"
          />
          {/* <h1 className="font-bold text-3xl">Welcome all home chefs</h1>
          <p className="font-semibold">
            We invite you to become a part of our culinary community by sharing
            your favorite recipe. Let your kitchen expertise shine and inspire
            foodies around the globe.
          </p> */}
        </div>
        <div>
          <form
            onSubmit={handleAddRecipe}
            className="border text-orange-300 shadow-xl rounded-3xl p-16 font-semibold background"
          >
            <div className="">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-xl text-orange-300 fooddetails">
                    Recipe name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input shadow-lg"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-orange-300 fooddetails">
                    Photo
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input shadow-lg"
                  required
                />
              </div>
            </div>
            <div className="">
              {" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-orange-300 fooddetails">
                    Ingredients
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="ingredients"
                  name="ingredients"
                  className="input shadow-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-orange-300 fooddetails">
                    Duration
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="duration"
                  name="duration"
                  className="input shadow-lg"
                  required
                />
              </div>
            </div>

            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-orange-300 fooddetails">
                    Instructions
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="instructions"
                  name="instructions"
                  className="input shadow-lg"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-orange-300 fooddetails">
                    Submit
                  </span>
                </label>
                <input
                  type="submit"
                  value="Submit"
                  placeholder="submit"
                  name="submit"
                  className="input shadow-lg"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
