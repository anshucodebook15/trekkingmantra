import React from "react";
import Banner from "~/components/banner/banner";
import Container from "~/components/container/container";
import Navbar from "~/components/navbar/navbar";
import SearchBar from "~/components/searchbar/searchbar";
import Sectionsubheader from "~/components/sectionsubheader/sectionsubheader";
import Topbar from "~/components/topbar/topbar";
import Tripcard from "~/components/tripcard/tripcard";
import Header from "~/layouts/header";
import { ImgPublicPath, svgIcon, utilsImg } from "~/utils/utils";

const test = () => {
  return (
    <>
      <div className={`appheader`}>
      
        <Container>
          <section id="trips " className="p-6">
            

            <div className="lg:grid lg:grid-cols-12 gap-8">
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
              
            </div>
          </section>
        </Container>

        <div className="p-20"></div>
      </div>
    </>
  );
};

export default test;
