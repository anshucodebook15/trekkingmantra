import React from "react";
import { assetsImg, svgIcon } from "~/utils/utils";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router";
// import './Tripcard.scss'

interface TripFigs {
  title: string;
  discountedPrice: number;
  saves: number;
  originalPrice: number;
  rating: number;
  votesBy: number;
  figure: string;
}

const Tripcard = ({
  title,
  discountedPrice,
  saves,
  originalPrice,
  rating,
  votesBy,
  figure,
}: TripFigs) => {
  return (
    <article
      itemScope
      itemType="https://schema.org/TouristTrip"
      className="tripcard mb-4"
    >
      <figure
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
        className="tripcard_crousal mb-2 overflow-hidden rounded-[5px] cursor-pointer shadow-[0_4px_8px_rgba(0,0,0,16%)]"
      >
        <img src={assetsImg(figure)} alt="" className="w-[100%]" />
        <meta
          itemProp="url"
          content="https://yourdomain.com/images/spiti-trip.jpg"
        />
      </figure>

      <Link to={"#"}>
        <div className="tripcard_ratingbar flex justify-between items-baseline mb-1">
          <div itemProp="itinerary">
            <span className="font-bold text-[20px] text-tertiary-500 ">2</span>
            <span className="text-gray-400 pl-1 text-[14px]">Days &</span>
            <span className="font-bold text-[20px] text-tertiary-500"> 3</span>
            <span className="text-gray-400 pl-1 text-[14px]">Nights</span>
          </div>

          <div
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            ⭐
            <span
              itemProp="ratingValue"
              className=" font-bold pl-1 text-[14px] text-teal-500 "
            >
              {rating}
            </span>
            <span
              itemProp="ratingCount"
              className="text-gray-500 pl-1 text-[12px]"
            >
              ({votesBy})
            </span>
          </div>
        </div>

        <div className="tripcard_title mb-1">
          <h2
            itemProp="name"
            className="text-[14px] lg:text-[16px] text-gray-800"
          >
            
            {title}
          </h2>
        </div>
        <div className="tripcard_tagbar flex mb-2">
          <div className="tripcard_tagbar-tag flex items-center bg-gray-100 w-max p-[4px] mr-2">
            <img src={svgIcon("camera")} alt="" className="w-6 pr-1" />
            <span itemProp="includes" className="text-[14px] text-gray-600">
              River Rafting
            </span>
          </div>
          <div className="tripcard_tagbar-tag flex items-center bg-gray-100 w-max p-[4px] mr-2">
            <img src={svgIcon("passport")} alt="" className="w-6 pr-1" />
            <span itemProp="includes" className="text-[14px] text-gray-600">
              Picnic
            </span>
          </div>
          <div className="tripcard_tagbar-tag flex items-center bg-gray-100 w-max p-[4px] mr-2">
            <img src={svgIcon("travel")} alt="" className="w-6 pr-1" />
            <span itemProp="includes" className="text-[14px] text-gray-600">
              Easy Travel
            </span>
          </div>
        </div>

        <div className="tripcard_pricebar mb-2 flex items-center">
          <h3
            itemProp="name"
            className="text-[16px] lg:text-[20px] font-semibold text-gray-800 mr-2"
          >
            INR {discountedPrice}
          </h3>
          <p
            itemProp="name"
            className="text-[12px] lg:text-[14px] mr-2  font-medium text-primary-500 line-through"
          >
            ₹ {originalPrice}
          </p>
          <p
            itemProp="name"
            className="text-[12px] lg:text-[12px] text-teal-500 font-medium"
          >
            SAVE ₹ {saves}
          </p>
        </div>
      </Link>

      <div className="tripcard_requestbtn">
        <Link to={"#"}>
          <button className="p-2 shadow-[0_4px_5px_rgba(0,0,0,0.059)] flex justify-center items-center bg-primary-500 text-white font-medium rounded-[5px] w-full cursor-pointer hover:bg-primary-600">
            <span>
              <IoIosCall className="text-[20px] mr-2" />{" "}
            </span>
            <span>Request Callback</span>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Tripcard;
