import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.card.quantity || 1),
    0
  );
  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum +
      ((item.card.quantity || 1) *
        (item.card.info.price || item.card.info.defaultPrice || 0)) /
        100,
    0
  );

  const handleClear = () => {
    dispatch(clearCart());
  };

  const groupedItemsMap = new Map();

  cartItems.forEach((item) => {
    const id = item.card.info.id;
    if (groupedItemsMap.has(id)) {
      const existing = groupedItemsMap.get(id);
      existing.card.quantity += item.card.quantity || 1;
    } else {
      groupedItemsMap.set(id, {
        ...item,
        card: {
          ...item.card,
          quantity: item.card.quantity || 1,
        },
      });
    }
  });

  const groupedItems = Array.from(groupedItemsMap.values());

  return (
    <div className="min-h-screen px-4 py-6 bg-lime-50">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="mb-6 font-bold text-2xl sm:text-3xl">Cart</h1>
        {cartItems.length === 0 ? (
          <h2 className="font-semibold text-lg text-gray-700">
            Your cart is Empty ! Add items to your cart !
          </h2>
        ) : (
          <>
            <div className="flex justify-end items-center mb-4 gap-2">
              <button
                data-testid="Clear Cart"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-red-800 transition"
                onClick={handleClear}
              >
                <IoTrashBin />
                <span className="font-medium text-sm">Clear Cart</span>
              </button>
            </div>
            <div className="w-full">
              <ItemList items={groupedItems} />
            </div>
            <div className="text-left mt-6 p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
              <p className="text-sm">
                Total Items: <span className="font-bold">{totalQuantity}</span>
              </p>
              <p className="text-sm">
                Total Amount:{" "}
                <span className="font-bold">₹{totalAmount.toFixed(2)}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
