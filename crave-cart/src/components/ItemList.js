import React from "react";
import { CDN_URL } from "../utils/constant";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveItems = (item) => {
    dispatch(removeItems(item));
  };

  const getItemCount = (targetItem) => {
    return cartItems.filter(
      (item) => item.card.info.id === targetItem.card.info.id
    ).length;
  };

  return (
    <div className="space-y-4 min-h-[100px] flex flex-col">
      {items.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id + index}
          className="min-h-[8rem] p-4 rounded-md shadow-sm border-b-2 border-gray-300 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center text-left"
        >
          <div className="sm:w-2/3 w-full mb-4 sm:mb-0">
            <h3 className="font-semibold text-base sm:text-lg mb-1">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-black mb-1">
              {" "}
              - ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="sm:w-1/3 w-full flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-32 h-24 object-cover rounded-md mb-1"
            />
            <div className="flex items-center bg-orange-400 rounded-md overflow-hidden z-10">
              <button
                data-testid="addItems"
                className="hover:bg-green-400 px-3 py-2.5"
                onClick={() => handleAddItems(item)}
              >
                <FaPlus />
              </button>
              <span className="px-2 text-sm font-semibold">
                {getItemCount(item) === 0 ? "ADD" : getItemCount(item)}
              </span>
              <button
                data-testid="removeItems"
                className="hover:bg-green-400 px-3 py-2.5"
                onClick={() => handleRemoveItems(item)}
              >
                <FaMinus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
