import React from "react";
import Banner from "~/components/banner/banner";
import Container from "~/components/container/container";
import Navbar from "~/components/navbar/navbar";
import SearchBar from "~/components/searchbar/searchbar";
import Topbar from "~/components/topbar/topbar";
import Header from "~/layouts/header";
import { ImgPublicPath, svgIcon } from "~/utils/utils";

const test = () => {
  return (
    <>
      <div className={`appheader `}>
        <section id="topbar">
          <Topbar />
        </section>
        <section id="header" className="tmword py-4">
          <Header />
        </section>
        <section id="banner">
          <Banner />
        </section>

        {/* <div className="container mx-auto">
          <section id="header"></section>

          <div className="p-4  border-gray-400">
            <div className="lg:w-[80%] md:w-[80%] p-2 mx-auto">
              <SearchBar />
              <div className="grid lg:grid-cols-6 md:grid-cols-6 ">
                <div className="col-span-4">
                  <Navbar />
                </div>
              </div>
            </div>

            <div className="container "></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default test;
