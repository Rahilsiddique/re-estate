import { createContext, useState } from "react";
import { mainData } from "../utils/mainData";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const sortOptions = ["highToLow", "lowToHigh"];
  const [filter, setFilter] = useState({
    location: "Mumbai",
    price: "10000-15000",
    propertyType: "Apartment",
    sort: "highToLow"
  });

  const [propertyList, setPropertyList] = useState(mainData);

  return (
    <GlobalContext.Provider
      value={{
        mainData,
        setFilter,
        filter,
        propertyList,
        setPropertyList,
        sortOptions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
