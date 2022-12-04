import React, { useContext } from "react";
import SearchCity from "./searchOptions/SearchCity.jsx";
import SearchPriceRange from "./searchOptions/SearchPriceRange.jsx";
import SearchPopType from "./searchOptions/SearchPopType.jsx";
import { GlobalContext } from "../../context/GlobalState.jsx";
import { mainData } from "../../utils/mainData.js";
import SearchSort from "./searchOptions/SearchSort.jsx";

const FilterSearch = () => {
  const { filter, setPropertyList, propertyList } = useContext(GlobalContext);

  function filterList() {
    setPropertyList(mainData);

    let filteredPropertyList = mainData.filter(
      (item) => item.location === filter.location
    );

    let tempPrice = filteredPropertyList.filter((item) => {
      const lowerLimit = filter.price.split("-")[0];
      const upperLimit = filter.price.split("-")[1];
      return item.price > lowerLimit && item.price < upperLimit;
    });

    let tempPops = tempPrice.filter(
      (item) => item.propertyType === filter.propertyType
    );

    if (tempPops.length === 0) {
      alert(`no house with this setting`);
      if (filter.sort === "lowToHigh") {
        let thisData = [...mainData];
        const tempData = thisData.sort((a, b) => a.price - b.price);
        setPropertyList(tempData);
      } else if (filter.sort === "highToLow") {
        let thisData = [...mainData];
        const tempData = thisData.sort((a, b) => b.price - a.price);
        setPropertyList(tempData);
      } else {
        propertyList;
      }
      return;
    }

    if (filter.sort === "lowToHigh") {
      let thisData = [...propertyList];
      const tempData = thisData.sort((a, b) => a.price - b.price);
      setPropertyList(tempData);
    } else if (filter.sort === "highToLow") {
      let thisData = [...propertyList];
      const tempData = thisData.sort((a, b) => b.price - a.price);
      setPropertyList(tempData);
    } else {
      propertyList;
    }
    setPropertyList(tempPops);
  }

  return (
    <div className="border py-3 my-6 rounded-lg border-gray-400 flex gap-4 px-3 justify-around items-center">
      <div className="border-r border-gray-300 pr-3">
        <div className="text-sm text-gray-400 font-semibold mr-3">Location</div>
        <SearchCity />
      </div>
      <div className="border-r border-gray-300 pr-3">
        <div className="text-sm text-gray-400 font-semibold">Sort</div>
        <div>
          <SearchSort />
        </div>
      </div>
      <div className="border-r border-gray-300 pr-3">
        <div className="text-sm text-gray-400 font-semibold">Price</div>
        <div>
          <SearchPriceRange />
        </div>
      </div>
      <div className="border-r border-gray-300 pr-3">
        <div className="text-sm text-gray-400 font-semibold">Property Type</div>
        <div>
          <SearchPopType />
        </div>
      </div>
      <div>
        <button
          className="bg-dark text-white py-3 px-6 rounded-md"
          onClick={filterList}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
