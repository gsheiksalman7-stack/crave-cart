import React, { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(0);
console.log(resInfo)
  if (resInfo === null) return <Loading />;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="min-h-screen px-3 py-5 bg-lime-50">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 leading-tight">
          {name}
        </h1>
        <h2 className="font-medium text-base sm:text-lg md:text-xl text-gray-700 mb-5">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
      </div>
      <div className="min-h-[200px] space-y-4">
        {categories?.map((category, index) => (
          <span key={index}>
            <RestaurantCategory
              data={category?.card?.card}
              showItems={index === showItems ? true : false}
              setShowItems={() => {
                setShowItems(index);
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
