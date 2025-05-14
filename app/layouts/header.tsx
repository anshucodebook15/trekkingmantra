import React from "react";
import Container from "~/components/container/container";
import Navbar from "~/components/navbar/navbar";
import SearchBar from "~/components/searchbar/searchbar";

const Header = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-8 px-2 py-2">
          <div className="hidden lg:col-span-1 p-2 lg:flex justify-center">
            <img
              src="/public/assets/logo/logo.png"
              alt=""
              className="w-20 h-22"
            />
          </div>
          <div className="col-span-8 lg:col-span-5  p-2">
            <SearchBar />
            <Navbar />
          </div>
          <div className="col-span-2  p-2"></div>
        </div>
      </Container>
    </>
  );
};

export default Header;
