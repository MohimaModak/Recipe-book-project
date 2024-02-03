import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TimeTable.css";
const TimeTable = () => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/timeTable")
      .then((res) => res.json())
      .then((data) => setTime(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl  text-center p-8 text-orange-300 timeIcon">
        Meal schedule
      </h1>

      <div className="flex justify-center items-center p-4">
        <div className="w-2/3">
          <h1 className="text-center text-blue-400 foodPara foodPara">
          A food time schedule often includes breakfast, lunch, dinner, and possibly snacks, with approximate times allocated for each meal to ensure regular nourishment and energy distribution throughout the day. Adhering to such a schedule can promote better metabolism, appetite control, and overall well-being.
          </h1>
        </div>
      </div>

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
