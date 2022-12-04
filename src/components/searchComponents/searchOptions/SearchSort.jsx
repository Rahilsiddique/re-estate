import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const SearchSort = () => {
  const { sortOptions, setFilter } = useContext(GlobalContext);
  const updateSort = (e) => {
    setFilter((p) => ({ ...p, sort: e.target.value }));
  };
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none border-none"
        onClick={(e) => updateSort(e)}
      >
        {sortOptions.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchSort;
