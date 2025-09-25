import React from "react";
import { LOGO_URL, PROFILE_LOGO } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const isLoggedIn = !!user?.email;
  const username = user?.email?.split("@")[0];

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/Login");
      })
      .catch((error) => {
        navigate("/Error");
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-2 flex justify-between items-center bg-orange-200 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-28" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-container">
        <ul className="flex flex-wrap p-2 m-1 mr-0 lg:mr-8 gap-y-2 lg:gap-y-0">
          <li className="px-4 text-lg font-bold cursor-pointer my-2">
            <Link to="/" className="hover:border-b-2 border-black border-solid">
              Home
            </Link>
          </li>
          <li className="px-4 text-lg font-bold cursor-pointer my-2">
            <Link
              to="/about"
              className="hover:border-b-2 border-black border-solid"
            >
              About
            </Link>
          </li>
          <li className="px-4 text-lg font-bold cursor-pointer my-2">
            <Link
              to="/contact"
              className="hover:border-b-2 border-black border-solid"
            >
              Contact Us
            </Link>
          </li>
          <li className="font-bold text-lg px-4 mx-2 p-2 cursor-pointer my-2.5">
            <Link to="/cart">
              <div className="flex relative">
                <FaCartShopping className="w-12" />
                <span
                  data-testid="cart-count"
                  className="bg-red-400 px-2 rounded-3xl absolute bottom-[15px]"
                >
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </li>
          <div className="mt-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-2 py-1 mr-2 text-base rounded-lg font-bold
      cursor-pointer bg-red-400 border-2 border-gray-400 solid hover:border-black"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/Login"
                className="px-2 py-1 mr-2 text-base rounded-lg font-bold
      cursor-pointer bg-red-400 border-2 border-gray-400 solid hover:border-black"
              >
                Login
              </Link>
            )}
          </div>
          <li className="mr-8 my-4.5 text-lg font-bold">
            <img
              alt="profile-icon.png"
              className="w-20 absolute"
              src={PROFILE_LOGO}
            />
            <span className="relative text-md top-6 left-10">
              {isLoggedIn ? "🟢" : "🔴"}
            </span>
            {isLoggedIn && (
              <h2 className="absolute text-sm right-2 top-[95px] lg:top-[75px]">
                Hi <span>{username}!</span>{" "}
              </h2>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
