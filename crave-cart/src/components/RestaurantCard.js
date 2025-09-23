import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resdata.info || resdata;

  return (
    <div
      data-testid="resCards"
      className="rounded-lg bg-gray-200 hover:bg-gray-300 m-2 p-3 w-[220px] sm:w-[200px] md:w-[180px] lg:w-[220px] h-[340px] shadow-md transition-all duration-200"
    >
      <img
        className="w-full h-32 object-cover rounded-md mb-3"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-semibold text-sm space-y-1">
        <h2 className="font-bold text-lg truncate">{name}</h2>
        <p className="text-gray-700 line-clamp-2">{cuisines?.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>⭐ {avgRating}</p>
        <p>ETA: {sla?.slaString}</p>
      </div>
    </div>
  );
};

//Higher Order Component
export const offerCard = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } = props?.resdata?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <div className="absolute bottom-[200px] left-5 bg-red-400 text-black text-xs sm:text-sm md:text-base font-semibold px-2 py-1 rounded-br-md shadow-md z-10">
          {header} {subHeader}
        </div>
      </div>
    );
  };
};

export default RestaurantCard;
