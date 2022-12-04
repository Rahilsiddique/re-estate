import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { priceRange } from "../../../data/priceRange";

const SearchPriceRange = () => {
  const { setFilter } = useContext(GlobalContext);

  function updateSetFilter(e) {
    setFilter((p) => ({ ...p, price: e.target.value }));
  }

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none border-none"
        onClick={(e) => updateSetFilter(e)}
      >
        {priceRange.map((e, i) => (
          <option key={i}>
            {e.lowerLimit}-{e.upperLimit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchPriceRange;
