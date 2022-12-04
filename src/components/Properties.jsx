import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import BetterList from "./propertiesComponents/BetterList";

const Properties = () => {
  const { propertyList } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = propertyList.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(propertyList.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log();
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* {currentPosts.map((e, i) => {
          return <PropertiesList {...e} index={i} />;
        })} */}
        <BetterList list={currentPosts} />
      </div>
      <div className="flex py-4 justify-center gap-1">
        {pageNumbers.map((number) => (
          <div
            key={number}
            className={
              currentPage === number
                ? "bg-gray-200 flex border border-gray-400 p-1.5"
                : `flex border border-gray-400 p-1.5`
            }
          >
            <a onClick={() => setCurrentPage(number)} href="!#">
              {number}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Properties;
