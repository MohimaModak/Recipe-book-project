import React, { useState } from "react";
import CountryWiseFood from "../CountryWiseFood/CountryWiseFood";
const CountryInput = () => {
  const [countryWiseInput, setCountryWiseInput] = useState("All");

  const handlecountryWiseInput = (e) => {
    setCountryWiseInput(e.target.value);
  };

  return (
    <div >
      <div>
        <label >
          <h1 className="text-4xl font-bold text-center pb-8">Select Country Wise Foods{" "}</h1>
        </label>
        <br />
        <div className="flex justify-center items-center pb-8">
        <select
          onChange={handlecountryWiseInput}
          className="border bg-gray-100 px-20 text-xl rounded-full py-1"
          name=""
          id=""
        >
          <option className="font-bold border" value="All">
            All
          </option>
          <option className="font-bold border" value="Japan">
            Japan
          </option>
          <option className="font-bold border" value="France">
            France
          </option>
          <option className="font-bold border" value="Mexico">
            Mexico
          </option>
          <option className="font-bold border" value="Thailand">
            Thailand
          </option>
          <option className="font-bold border" value="India">
            India
          </option>
          <option className="font-bold border" value="Bangladesh">
            Bangladesh
          </option>
          <option className="font-bold border" value="USA">
            USA
          </option>
          <option className="font-bold border" value="Denmark">
            Denmark
          </option>
          <option className="font-bold border" value="Australia">
            Australia
          </option>
          <option className="font-bold border" value="Canada">
            Canada
          </option>
          <option className="font-bold border" value="Germany">
            Germany
          </option>
          <option className="font-bold border" value="Finland">
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
