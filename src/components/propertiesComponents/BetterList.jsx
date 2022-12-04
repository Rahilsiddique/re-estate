import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const BetterList = (list) => {
  return (
    <>
      {list.list.map(({ img, price, propertyType, location, time }, index) => (
        <div
          className="flex border border-gray-400 p-2 grow rounded flex-col"
          key={index}
        >
          <div className="overflow-hidden h-40">
            <img
              src={img}
              alt="img"
              className="overflow-hidden"
              height="300"
              width="auto"
            />
          </div>
          <div>
            <span className="text-2xl font-semibold text-dark">
              {price.toLocaleString()}
            </span>
            /Month
          </div>
          <div className="text-3xl font-semibold">{location}</div>
          <div>
            <span className="text-gray-400">Property Type: </span>{" "}
            {propertyType}
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-gray-400">Posted on: </span>
              {time}
            </div>
            <div>
              <span className="text-gray-400">days ago:</span>{" "}
              {Math.floor(
                (new Date() - new Date(time)) / (1000 * 60 * 60 * 24)
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BetterList;
