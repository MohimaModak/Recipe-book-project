import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CountryFoodDetails.css";
const CountryFoodDetails = () => {
  const foodLoader = useLoaderData();
  console.log(foodLoader);

  const [releventCountry, setreleventCountry] = useState([]);

  useEffect(() => {
    fetch("/AppsFood.json")
      .then((res) => res.json())
      .then((data) => setreleventCountry(data));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>
        {Array.isArray(foodLoader) && foodLoader.length === 0 ? (
          <h1 className="text-center font-semibold text-3xl sm:text-5xl md:text-5xl fooddetails text-orange-300 lg:text-6xl">
            <h1>Sorry</h1> <span>No food recipe available</span>
          </h1>
        ) : (
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl text-center text-orange-300 fooddetails m-5">
              Country Wise Food
            </h1>
            <div className="flex justify-center items-center p-5">
              <div className="w-2/3">
                <h1 className="text-center text-blue-400 foodPara">
                  Culinary Journeys: A Gastronomic Tour Around the World.Global
                  Gastronomy: Exploring the World's Cuisine Country by
                  Country.From Pad Thai to Pasta: A Delicious Dive into
                  International Cuisine.Worldly Delights: A Taste of Each
                  Nation's Culinary Treasures.
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {Array.isArray(foodLoader) &&
                foodLoader.map((food) => (
                  <div>
                    <div key={food._id}>
                      <div className="backdrop-blur-md relative shadow-2xl p-3.5 rounded-md">
                        <img
                          src={food.food_image}
                          className="h-[250px] w-[450px] rounded-md"
                          alt={food.food_name}
                        />
                        <div className="absolute flex opacity-0 hover:opacity-100 text-white hover:backdrop-blur-sm justify-center items-center inset-0">
                          <div className="text-center p-5">
                            <h1 className="font-semibold text-xl text-center">
                              <span className="font-bold text-2xl fooddetails">
                                Country:{" "}
                              </span>
                              <span className="foodPara">{food.country}</span>
                            </h1>
                            <h1 className="font-semibold text-xl text-center foodPara">
                              {food.food_name}
                            </h1>
                            <Link to={`/details/${food._id}`}>
                              <div className="border foodPara text-center rounded-full px-5 py-1 m-5 text-xl">
                                <button>Recipe</button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex justify-center items-center shadow-2xl p-5 mt-20 rounded-md">
              <div className="md:flex justify-center items-center gap-5">
                <div className="md:w-2/3">
                  <h1 className=" text-4xl md:text-4xl lg:text-6xl text-center text-orange-300 fooddetails mb-5">
                    Worldwide Food
                  </h1>
                  <p className="foodPara text-blue-400 ">
                    Exploring country-wise cuisine is like embarking on a
                    culinary journey around the world. Each nation boasts its
                    own rich tapestry of flavors, ingredients, and cooking
                    techniques that reflect its unique geography, history, and
                    culture. From the savory spices of Indian curries to the
                    hearty stews of Irish cuisine, and from the delicate sushi
                    of Japan to the smoky barbecues of the United States, every
                    country's food tells a story of its people and traditions.
                    Sampling these diverse dishes offers not just a taste
                    sensation, but also a deeper understanding of the world's
                    rich cultural heritage and the universal language of food.
                  </p>
                </div>

                <img src="https://img.freepik.com/free-vector/world-food-day-logo-concept_1308-118658.jpg?w=740&t=st=1706849646~exp=1706850246~hmac=4973ca10dfd7ade14ecfb2720dd4c372eef004f4b1b2109496518453633fdd56" />
              </div>
            </div>

            <div className="shadow-2xl p-5 mt-20 rounded-md ">
              <h1 className="text-4xl md:text-4xl lg:text-6xl text-center text-orange-300 fooddetails m-5">
                Relevent country food
              </h1>
              <div className="flex justify-center items-center">
                <div className="w-2/3">
                  <p className="text-center text-blue-400 foodPara">
                    Relevant Country Food is your passport to the authentic
                    flavors of the world. Explore our curated selection of
                    iconic dishes, and embark on a gastronomic journey that
                    transcends borders and tantalizes taste buds.
                  </p>
                </div>
              </div>
              <div className="grid p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-md ">
                {releventCountry.map((relevent) => (
                  <div className="shadow-2xl p-3.5 rounded-md cursor-pointer relative">
                    <img
                      src={relevent.food_image}
                      className="h-[250px] w-[450px] backdrop-blur-2xl rounded-md shadow-2xl"
                    />
                    <div className="absolute flex justify-center items-center inset-0 opacity-0 hover:opacity-100 hover:backdrop-blur-sm">
                      <div className="border text-white text-center rounded-full px-12 py-2">
                        <button>Recipe</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="shadow-2xl p-5 mt-20 rounded-md">
                <div className="lg:flex justify-center gap-5">
                  <img
                    src="https://img.freepik.com/premium-photo/world-map-consisting-fruits-vegetables-white-background-generative-ai_73944-33155.jpg?w=826"
                    className="rounded-md mb-10 lg:w-1/3"
                  />

                  <div className=" md:w-2/3">
                    <h1 className=" text-4xl md:text-4xl lg:text-6xl text-center text-orange-300 fooddetails mb-5">
                      Global food
                    </h1>
                    <p className=" text-blue-400 foodPara">
                      Global cuisine offers a tantalizing tapestry of flavors,
                      reflecting the diverse cultures and culinary traditions
                      found across the world. From the fiery spices of Indian
                      curries to the delicate balance of flavors in Japanese
                      sushi, each country boasts a unique gastronomic identity.
                      In Thailand, aromatic herbs and spices mingle harmoniously
                      in dishes like Pad Thai and Green Curry, while in Mexico,
                      the vibrant colors and bold flavors of dishes like tacos
                      and enchiladas showcase the country's love affair with
                      chili peppers and fresh ingredients. Meanwhile, in France,
                      the art of French cooking is celebrated through dishes
                      like Coq au Vin and Beef Bourguignon, highlighting
                      techniques such as braising and sauce-making. Whether it's
                      the comforting warmth of a bowl of Italian pasta or the
                      zesty tang of Brazilian feijoada, global cuisine invites
                      exploration and appreciation of the world's diverse
                      culinary heritage.
                    </p>
                  </div>
                </div>

                <div>
                  <p className=" text-blue-400 foodPara">
                    From the bustling streets of Thailand to the picturesque
                    vineyards of France, each country offers a tantalizing array
                    of flavors that captivate the palate and tell a story of
                    culinary heritage. Thai cuisine, known for its bold and
                    aromatic dishes, features vibrant curries, tangy salads, and
                    fragrant stir-fries infused with lemongrass, ginger, and
                    chili. In Japan, sushi and sashimi showcase the delicate
                    balance of flavors and meticulous preparation, while hearty
                    bowls of ramen warm the soul with rich broths and tender
                    noodles. Italy, famous for its passion for food, entices
                    with savory pasta dishes, wood-fired pizzas, and creamy
                    gelato, all made with fresh, locally sourced ingredients.
                    Meanwhile, in Mexico, the colorful tapestry of flavors
                    includes spicy tacos, tangy ceviche, and decadent mole
                    sauces, highlighting the country's love affair with chili
                    peppers and indigenous ingredients like corn and beans.
                    Whether indulging in the rich sauces of French cuisine, the
                    spicy curries of Thailand, or the comforting embrace of
                    Italian pasta, each country's culinary offerings invite
                    exploration and celebration of its unique cultural identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryFoodDetails;
