import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [oninputpress, setOninputpress] = useState("");

  const handleChange = (e: any) => {
    setOninputpress(e.target.value);
  };

  return (
    <div
      className="border-1 bg-white border-gray-300 rounded-full
     shadow-[0_4px_5px_rgba(0,0,0,0.059)] mb-2 lg:w-[50%]"
    >
      <div className="relative searchbar flex items-center">
        {oninputpress ? (
          ""
        ) : (
          <div className="absolute left-[32px]">
            <span className="p-[10px] m-0 z-0 text-[14px] ">
              <span className="text-gray-400 ">Search Your </span>
              <span className="text-gray-800 font-medium">Destination...</span>
            </span>
          </div>
        )}

        <button className=" p-2">
          <CiSearch fontSize={20} className="text-gray-600" />
        </button>

        <input
          type="text"
          className="static z-10 p-[4px] lg:p-[8px] outline-none"
          value={oninputpress}
          name="searchbar"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
