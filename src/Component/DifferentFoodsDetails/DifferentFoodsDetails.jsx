import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./DifferentFoodsDetails.css";
import { BiCopy } from "react-icons/bi";
import Swal from "sweetalert2";

const DifferentFoodsDetails = () => {
  const differentFoodsLoader = useLoaderData();
  console.log(differentFoodsLoader);

  const [food, setfood] = useState([]);
  useEffect(() => {
    fetch("/Breakfast.json")
      .then((res) => res.json())
      .then((data) => setfood(data));
  }, []);

  const copyRecipe = (foodIndex) => {
    const copiedRecipe = `${differentFoodsLoader[foodIndex].image}\n\nFood name: \n${differentFoodsLoader[foodIndex].food_name}\n\nFood type: \n${differentFoodsLoader[foodIndex].type}\n\nRecipe :\n ${differentFoodsLoader[foodIndex].recipe}`;
    navigator.clipboard.writeText(copiedRecipe);
    Swal.fire({
      title: "Successfully!",
      text: "Copied the recipe",
      icon: "success",
    });
  };

  const againCopyRecipe = (foodIndex) => {
  
    const copy = `${setfood.image}`;
    navigator.clipboard.writeText(copy);
    Swal.fire({
      title: "Successfully!",
      text: "Copied the recipe",
      icon: "success",
    });
  };

  return (
    <div className="flex justify-center items-center ">
      <div>
        <div>
          {differentFoodsLoader.map((different, index) => {
            return (
              <div className=" md:grid grid-cols-2 gap-5">
                <div>
                  <img src={different.image} className="rounded-md " />
                </div>
                <div className="">
                  <h1 className=" ">
                    {/* {" "} */}
                    <span className=" ">
                      <div className="flex gap-5 fooddetails text-4xl text-orange-300">
                        <h1 className="timeIcon text-6xl pt-5 pb-5 text-orange-300">
                          {different.type}
                        </h1>{" "}
                        <button onClick={() => copyRecipe(index)}>
                          <BiCopy />
                        </button>
                      </div>
                    </span>
                  </h1>
                  <h1 className="foodPara text-blue-300 pb-5 text-2xl">
                    {different.food_name}{" "}
                  </h1>
                  <h1 className="foodPara text-blue-300">{different.recipe}</h1>
                  <h1 className="foodPara text-blue-300">
                    Food can be classified into various categories based on
                    their characteristics and nutritional composition. Some
                    common types of food include fruits, vegetables, grains,
                    proteins, and dairy products. Fruits and vegetables are rich
                    in vitamins and minerals, while grains provide essential
                    carbohydrates for energy. Proteins, found in sources like
                    meat, poultry, fish, and legumes, are crucial for building
                    and repairing tissues. Dairy products such as milk, cheese,
                    and yogurt are excellent sources of calcium and protein. A
                    balanced diet consisting of a variety of these food types is
                    essential for maintaining good health and
                    well-being.Navigating the landscape of food choices is key
                    to crafting a balanced and nourishing diet.
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="my-20">
            <h1 className="timeIcon text-4xl py-5 text-orange-300">
              Exploring Culinary Diversity
            </h1>
            <p className="foodPara text-blue-300">
              Welcome to our diverse culinary haven, where flavors from around
              the globe converge to tantalize your taste buds and ignite your
              passion for food exploration. From sizzling street food stalls in
              Bangkok to the cozy trattorias of Italy, we celebrate the rich
              tapestry of global cuisine. Indulge in aromatic spices, vibrant
              colors, and mouthwatering textures as you embark on a gastronomic
              adventure like no other. Whether you crave the comforting warmth
              of soulful soups or the fiery kick of exotic spices, our curated
              collection of diverse foods promises to transport you to far-off
              lands with every bite. Join us as we delve into the delicious
              intricacies of world cuisine and unlock the secrets of culinary
              excellence. Bon appétit!
            </p>
          </div>
          <div className="flex justify-center items-center shadow-2xl p-16 rounded-md ">
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
              {food.map((hour, index) => {
                return (
                  <div className="back relative shadow-2xl rounded-md h-[260px] w-[265px] hover:h-[440px] transition-all duration-1000">
                    <div className="relative flex justify-center items-center image">
                      <div>
                        <div className="flex justify-center items-center">
                          <img
                            src={hour.image}
                            className="h-[250px] w-[250px] rounded-full transition-all duration-5000 p-1.5 shadow-2xl"
                          />
                        </div>
                        <div className="show">
                          <h1 className="text-4xl text-center p-2 timeIcon text-orange-300 font-semibold letter">
                            {hour.foodName}
                          </h1>
                          <h1 className=" text-center p-2 foodPara text-blue-300 letter">
                            {hour.foodRecipe}
                          </h1>
                          <div className="flex justify-center text-orange-300 text-3xl">
                            <button onClick={() => againCopyRecipe(index)}>
                              <BiCopy />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-20 lg:flex justify-between items-center gap-5">
            <img
              src="https://img.freepik.com/free-vector/casserole-pot_1284-11444.jpg?w=740&t=st=1706903326~exp=1706903926~hmac=eec5a71aae96113279fb41377b5c9de26e7020efa8e08fb0eac6036367504270"
              className="rounded-md"
            />
            <div className="shadow-2xl p-5 rounded-md">
              <h1 className="timeIcon text-5xl md:text-6xl lg:text-6xl py-5 text-orange-300">
                A Journey Through Cuisine
              </h1>

              <p className="foodPara text-blue-300">
                Embark on a mouthwatering odyssey as we traverse the globe
                through the lens of cuisine. From the aromatic spices of India
                to the savory delights of Italy, our culinary journey promises
                to tantalize your taste buds and awaken your senses. Explore the
                vibrant colors of Thai street food, savor the delicate flavors
                of Japanese sushi, and indulge in the hearty comfort of American
                barbecue. With each dish, we invite you to experience the rich
                tapestry of culture and tradition woven into every bite. Join us
                on this gastronomic adventure as we celebrate the diversity of
                flavors that unite us all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentFoodsDetails;
