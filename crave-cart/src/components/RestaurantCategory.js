import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ItemList from "../components/ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleClick = () => {
    setShowItems();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4">
      <div
        className="max-w-3xl bg-white mx-auto shadow-md rounded-lg my-4 p-4 cursor-pointer transition-all duration-200 hover:shadow-lg"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold text-base sm:text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <FaAngleDown />
        </div>
        {showItems && (
          <div className="mt-4">
            <ItemList items={data?.itemCards} />
          </div>
        )}
      </div>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-12 py-2 rounded-full shadow-lg"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default RestaurantCategory;
