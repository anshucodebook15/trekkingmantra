import React from "react";

const Theme = () => {
  return (
    <div className="container mx-auto font-poppins">
      <div className="bg-amber-50 text-center">
        <h1>Theme Design For Treking Mantra</h1>
      </div>

      <div className="typography_box border-1 border-gray-400/40 p-10 w-[70%] min-h-[90vh] mx-auto mt-10">
        <h1 className="text-[32px] font-medium mb-2 text-gray-900">
          Italy and Switzerland Tour Package
        </h1>

        <p className="text-[16px]/[1.6] text-gray-800 mb-2 ">
          Experience the best of Europe’s history and natural beauty with Italy
          and Switzerland tour packages, blending Italy’s iconic cities with
          Switzerland’s scenic Alps.
        </p>
        <p className="text-[16px]/[1.6] text-gray-800 ">
          This guide will get you familiar with the basic plumbing required to
          run a Remix app as quickly as possible. While there are many starter
          templates with different runtimes, deploy targets, and databases,
          we're going to create a bare-bones project from scratch.
        </p>

        <div className="p-2"></div>

        <h2 className="text-[22px] font-medium mb-2 text-gray-900">
          Rishikesh Trek
        </h2>
        <p className="text-[14px]/[1.4] font-regular text-gray-600 pb-1 mb-2">
          {" "}
          9 Days & 8 Nights
        </p>
        <p className="text-[12px]/[1.4] font-medium text-gray-600 bg-amber-100 p-[4px] ">
          {" "}
          SAVES INR 10,000 /-
        </p>
      </div>
    </div>
  );
};

export default Theme;
