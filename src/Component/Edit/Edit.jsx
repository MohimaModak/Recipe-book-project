import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const editLoader = useLoaderData();
  console.log(editLoader);
  const { _id, name, duration, ingredients, instructions, photo } = editLoader;

  const handleEdit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const duration = e.target.duration.value;
    const ingredients = e.target.ingredients.value;
    const instructions = e.target.instructions.value;
    const photo = e.target.photo.value;

    const editRecipe = { name, duration, ingredients, instructions, photo };
    console.log(editRecipe);

    fetch(
      `http://localhost:4000/edit/${_id}`,

      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editRecipe),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Wow",
            text: "Successfully updated",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div className="flex justify-around">
    <div className="flex justify-center items-center bg-orange-50 w-min p-5 rounded-2xl">
      <form onSubmit={handleEdit}>
        <div className="">
          <label className="label">
            <span className="label-text font-bold text-2xl text-orange-300 fooddetails">
              Recipe Name
            </span>
          </label>
          <input
            type="text"
            className="text-blue-400 px-2 py-1 shadow-2xl rounded-full  foodPara text-xl "
            name="name"
            defaultValue={name}
          />
          <label className="label">
            <span className="label-text font-bold text-2xl  text-orange-300 fooddetails">
              Duration
            </span>
          </label>
          <input
            type="number"
            className="text-blue-400 px-2 py-1  shadow-2xl rounded-full  foodPara text-xl "
            name="duration"
            defaultValue={duration}
          />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text font-bold text-2xl text-orange-300 fooddetails">
              Ingredients
            </span>
          </label>
          <input
            type="text"
            className="text-blue-400 px-2 py-1 shadow-2xl rounded-full  foodPara text-xl "
            name="ingredients"
            defaultValue={ingredients}
          />
          <label className="label">
            <span className="label-text font-bold text-2xl text-orange-300 fooddetails">
              Instructions
            </span>
          </label>
          <input
            type="text"
            className="text-blue-400 px-2 py-1 shadow-2xl rounded-full  foodPara text-xl "
            name="instructions"
            defaultValue={instructions}
          />{" "}
        </div>
        <div className="">
          <label className="label">
            <span className="label-text font-bold text-2xl text-orange-300 fooddetails">
              Photo
            </span>
          </label>
          <input
            type="text"
            className="text-blue-400 px-2 py-1 shadow-2xl rounded-full  foodPara text-xl "
            name="photo"
            defaultValue={photo}
          />
          <br />
          <div className="flex justify-center pt-5">
            <input
              className="px-5 py-1 text-xl font-semibold rounded-full bg-orange-200 foodPara text-blue-400"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </form>
    </div>
   
    </div>
  );
};

export default Edit;
