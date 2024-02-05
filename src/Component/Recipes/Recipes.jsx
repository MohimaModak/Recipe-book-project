import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import "./Recipes.css";
const Recipes = () => {
  const allRecipe = useLoaderData();
  console.log(allRecipe);

  const [deleteRecipes, setdeleteRecipes] = useState(allRecipe);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/addRecipe/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount > 0) {
          const deleteRecipes = deleteRecipes.filter(
            (recipes) => recipes.id !== id
          );
          setdeleteRecipes(deleteRecipes);
        }
      });
  };

  return (
    <div>
      <div>
        {deleteRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="shadow-2xl rounded-md m-5 p-10">
              <div className="grid lg:grid-cols-2">
                <div>
                  <img
                    src={recipe.photo}
                    className="rounded-t-md rounded-b-md sm:pb-5"
                  />
                </div>
                <div className="lg:pl-8">
                  <h1 className="fooddetails text-orange-300 text-6xl">
                    {recipe.name}
                  </h1>
                  <h1 className="pt-8">
                    <span className="fooddetails text-orange-300 text-4xl">
                      Ingredients:
                    </span>{" "}
                    <span className="foodPara text-blue-400 ">
                      {recipe.ingredients}
                    </span>
                  </h1>

                  <h1 className="pt-8">
                    <span className="fooddetails text-orange-300 text-4xl">
                      Duration :
                    </span>{" "}
                    <span className="foodPara text-blue-400 text-xl">
                      {recipe.duration} Minute
                    </span>
                  </h1>
                  <div className="flex text-4xl mt-5  text-orange-300 pt-3">
                    <Link to={`/edit/${recipe._id}`}>
                      <div className="pr-3 cursor-pointer">
                        <FaRegEdit />
                      </div>
                    </Link>

                    <div
                      onClick={() => handleDelete(recipe._id)}
                      className="cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="pt-10">
                <span className="fooddetails text-orange-300 text-4xl">
                  Instructions: 
                </span>
                <span className="foodPara text-blue-400">
                  {recipe.instructions}
                </span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
