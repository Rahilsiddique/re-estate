import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { indianCities } from "../../../data/cities";

const SearchCity = () => {
  const { setFilter } = useContext(GlobalContext);

  function updateSetFilter(e) {
    setFilter((p) => ({ ...p, location: e.target.value }));
  }
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none border-none"
        onClick={(e) => updateSetFilter(e)}
      >
        {indianCities.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchCity;
