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
    const hour = e.target.hour.value;
    const minute = e.target.minute.value;
    const addedRecipe = {
      name,
      photo,
      ingredients,
      instructions,
      hour,
      minute,
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
    <div>
      <div className="video-container relative">
        <div>
          <video autoPlay loop muted playsInline className="video">
            <source src={video} className="video w-full" />
          </video>
          <div className="outline-violet-400"></div>
        </div>

        <div className="absolute flex justify-center items-center inset-0">
          <form
            onSubmit={handleAddRecipe}
            className=" font-semibold background"
          >
            <div className="flex justify-center items-center gap-5">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-white">Recipe name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered "
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              {" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Ingredients</span>
                </label>
                <input
                  type="text"
                  placeholder="ingredients"
                  name="ingredients"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Duration</span>
                  {/* <select
                    name="
                  "
                    id=""
                  >
                    <option value="Hour" name="hour">
                      Hour
                    </option>
                    <option value="Minute" name="minute">
                      Minute
                    </option>
                  </select> */}
                </label>
                <input
                  type="number"
                  placeholder="duration"
                  name="duration"
                  className="input input-bordered "
                  required
                />
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Instructions</span>
                </label>
                <input
                  type="text"
                  placeholder="instructions"
                  name="instructions"
                  className="input input-bordered "
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Submit</span>
                </label>
                <input
                  type="submit"
                  value="Submit"
                  placeholder="submit"
                  name="submit"
                  className="input input-bordered "
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
