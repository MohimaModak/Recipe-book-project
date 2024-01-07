import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TimeTable = () => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/timeTable")
      .then((res) => res.json())
      .then((data) => setTime(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Meal schedule</h1>

      <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {time.map((timeOfFood) => (
          <Link to={`/hourWiseFood/${timeOfFood.Hour}`}>
            <div key={timeOfFood.Hour}>
              <div className="flex justify-center items-center cursor-pointer">
                {" "}
                <img src={timeOfFood.Image} />{" "}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
