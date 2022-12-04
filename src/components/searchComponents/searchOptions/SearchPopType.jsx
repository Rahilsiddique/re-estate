import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { propertyType } from "../../../data/propertyType";

const SearchPriceRange = () => {
  const { setFilter } = useContext(GlobalContext);

  function updatePop(e) {
    setFilter((p) => ({ ...p, propertyType: e.target.value }));
  }

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none border-none"
        onClick={(e) => updatePop(e)}
      >
        {propertyType.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchPriceRange;
