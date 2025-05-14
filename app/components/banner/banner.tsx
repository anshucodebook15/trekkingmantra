import React from "react";
import Container from "../container/container";
import { bannerImg } from "~/utils/utils";
// import './Banner.scss'

const Banner = () => {
  return (
    <div className="Banner py-2">
      <Container>
        <div className="px-2">
          <img src={bannerImg("home_banner.png")} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
