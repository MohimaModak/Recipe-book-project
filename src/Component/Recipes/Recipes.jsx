import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

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
      <h1 className="font-bold text-2xl text-gray-400 pb-8">
        Recipes: {allRecipe.length}
      </h1>
      <div>
        {deleteRecipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <div className="grid md:grid-cols-2 pb-10">
                <div>
                  <img src={recipe.photo} className="lg:w-[550px] rounded-md" />
                </div>
                <div>
                  <h1>
                    <span className="font-bold text-2xl text-gray-400">
                      Name:{" "}
                    </span>
                    {recipe.name}
                  </h1>
                  <h1>
                    <span className="font-bold text-2xl  text-gray-400">
                      Ingredients:{" "}
                    </span>
                    {recipe.ingredients}
                  </h1>
                  <h1>
                    <span className="font-bold text-2xl  text-gray-400">
                      Instructions:{" "}
                    </span>
                    {recipe.instructions}
                  </h1>
                  <h1>
                    <span className="font-bold text-2xl  text-gray-400">
                      Duration:{" "}
                    </span>
                    {recipe.duration} Minute
                  </h1>
                  <div className="flex text-2xl mt-5  text-gray-400">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
