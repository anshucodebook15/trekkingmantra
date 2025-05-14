import React from "react";
import { utilsImg } from "~/utils/utils";
// import './Sectionsubheader.scss'

const Sectionsubheader = () => {
  return (
    <div className="Sectionsubheader py-2 my-2 ">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="font-semibold text-xl">Leh Ladhak 🍜</h2>
        </div>
        <div className="">
          <img src={utilsImg("destination2")} alt="" className="w-100" />
        </div>
        <div className=" border-1 rounded-[5px] border-gray-300 p-1">
          <button className="bg-primary-500 w-20 rounded-[5px] cursor-pointer text-white font-medium mr-2 p-1 text-[14px]">
            {" "}
            New
          </button>
          <button className=" w-20 cursor-pointer text-gray-500 p-1 font-medium text-[14px] ">
            {" "}
            Latest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sectionsubheader;
