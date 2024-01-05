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
    <div>
      <form onSubmit={handleEdit}>
        <div className="flex justify-center items-center">
          <label className="label">
            <span className="label-text font-bold text-xl">Recipe Name</span>
          </label>
          <input type="text" name="name" defaultValue={name} /> <br />
          <label className="label">
            <span className="label-text font-bold text-xl">Duration</span>
          </label>
          <input type="number" name="duration" defaultValue={duration} /> <br />
        </div>
        <div className="flex justify-center items-center">
          <label className="label">
            <span className="label-text font-bold text-xl">Ingredients</span>
          </label>
          <input type="text" name="ingredients" defaultValue={ingredients} />
          <br />
          <label className="label">
            <span className="label-text font-bold text-xl">Instructions</span>
          </label>
          <input type="text" name="instructions" defaultValue={instructions} />{" "}
          <br />
        </div>
        <div className="flex justify-center items-center">
          <label className="label">
            <span className="label-text font-bold text-xl">Photo</span>
          </label>
          <input type="text" name="photo" defaultValue={photo} /> <br />
          <label className="label">
            <span className="label-text font-bold text-xl">Edit Recipe</span>
          </label>
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default Edit;
