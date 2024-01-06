import React, { useState } from "react";
import CountryWiseFood from "../CountryWiseFood/CountryWiseFood";
const CountryInput = () => {
  const [countryWiseInput, setCountryWiseInput] = useState("All");

  const handlecountryWiseInput = (e) => {
    setCountryWiseInput(e.target.value);
  };

  return (
    <div className="">
      <label className=" mb-5 text-2xl font-bold text-center p-2">
        Select Country Wise Foods{" "}
      </label>
      <select
        onChange={handlecountryWiseInput}
        className=""
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
<CountryWiseFood countryWiseInput={countryWiseInput}/>
    </div>
  );
};

export default CountryInput;







