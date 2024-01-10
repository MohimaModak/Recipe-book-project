import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HourRecipeDetails = () => {
    const detailsLoader = useLoaderData()
    console.log(detailsLoader)
    return (
        <div>
           <div>
            {
                detailsLoader.map((details)=> {
                    return (
                      <div>
                        <img src={details.food_image} alt="" srcset="" />
                        <h1>{details.Hour}</h1>
                        <h1>{details.Name}</h1>
                      </div>  
                    )
                })
            }
           </div>
        </div>
    );
};

export default HourRecipeDetails;