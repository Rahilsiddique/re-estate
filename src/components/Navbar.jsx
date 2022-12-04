import React from "react";

const Navbar = () => {
  return (
    <div className="w-full shadow h-16 flex justify-between px-[8%]">
      <div className="text-4xl py-2 font-semibold">re-estate</div>
      <div className="flex gap-4">
        <button className="text-2xl border-2 bg-dark text-white my-2 px-4 rounded-xl font-bold">
          Login
        </button>
        <button className="text-2xl border-2 border-dark rounded-xl my-2 px-4">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
