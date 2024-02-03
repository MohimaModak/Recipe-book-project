import React, { useState } from "react";
import "./CountryInput.css";
import CountryWiseFood from "../CountryWiseFood/CountryWiseFood";
const CountryInput = () => {
  const [countryWiseInput, setCountryWiseInput] = useState("All");

  const handlecountryWiseInput = (e) => {
    setCountryWiseInput(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <h1 className="text-3xl md:text-5xl  text-center pb-8 text-orange-300 fooddetails">
            Select Country Wise Foods{" "}
          </h1>
        </label>
        <br />
        <div className="flex justify-center items-center pb-8">
          <select
            onChange={handlecountryWiseInput}
            className="shadow-2xl foodPara text-blue-300 text-center text-2xl"
          >
            <option  value="All">
              All
            </option>
            <option  value="Japan">
              Japan
            </option>
            <option  value="France">
              France
            </option>
            <option  value="Mexico">
              Mexico
            </option>
            <option  value="Thailand">
              Thailand
            </option>
            <option  value="India">
              India
            </option>
            <option  value="Bangladesh">
              Bangladesh
            </option>
            <option  value="USA">
              USA
            </option>
            <option  value="Denmark">
              Denmark
            </option>
            <option  value="Australia">
              Australia
            </option>
            <option  value="Canada">
              Canada
            </option>
            <option  value="Germany">
              Germany
            </option>
            <option  value="Finland">
              Finland
            </option>
          </select>
        </div>
        <CountryWiseFood countryWiseInput={countryWiseInput} />
      </div>
    </div>
  );
};

export default CountryInput;
