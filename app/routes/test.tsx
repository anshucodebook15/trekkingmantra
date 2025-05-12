import React from "react";
import Banner from "~/components/banner/banner";
import Container from "~/components/container/container";
import Navbar from "~/components/navbar/navbar";
import SearchBar from "~/components/searchbar/searchbar";
import Topbar from "~/components/topbar/topbar";
import Tripcard from "~/components/tripcard/tripcard";
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
        <Container>
          <div className="p-4"></div>
          <section id="trips " className="p-6 lg:grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <Tripcard
                figure="ladhak.png"
                rating={4.2}
                votesBy={252}
                discountedPrice={17895}
                originalPrice={20689}
                saves={3250}
                title="Switzerland Amsterdam Paris | Excursion to DISNEYLAND Paris"
              />
            </div>
            <div className="lg:col-span-4">
              <Tripcard
                figure="port.png"
                rating={4.1}
                votesBy={156}
                discountedPrice={19895}
                originalPrice={20789}
                saves={1250}
                title="Ladakh Adventure Expedition with Turtuk Village"
              />
            </div>
            <div className="lg:col-span-4">
              <Tripcard
                figure="spain.png"
                rating={3.9}
                votesBy={269}
                discountedPrice={19795}
                originalPrice={19789}
                saves={3652}
                title="Leh Ladakh Bike Trip | FREE Excursion to Chang-la Pass"
              />
            </div>
          </section>
        </Container>

        <div className="p-20"></div>
      </div>
    </>
  );
};

export default test;
