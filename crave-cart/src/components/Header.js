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
    <div className="w-full sm:max-w-screen-xl sm:mx-auto py-2 px-4 overflow-x-hidden bg-orange-200 shadow-lg">
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Logo */}
        <Link to="/">
          <img className="w-24 sm:w-28 ml-32 sm:ml-0" src={LOGO_URL} alt="Logo" />
        </Link>

        {/* Navigation */}
        <ul className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 text-base sm:text-lg font-bold mt-4 sm:mt-0">
          <li>
            <Link to="/" className="hover:border-b-2 border-black">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:border-b-2 border-black">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:border-b-2 border-black">Contact</Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="flex items-center">
              <FaCartShopping className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="bg-red-400 text-white text-xs px-2 rounded-full absolute -top-2 -right-3">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className="pl-6 sm:pl-0">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-2 sm:px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500 text-sm sm:text-base"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/Login"
                className="px-2 sm:px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500 text-sm sm:text-base"
              >
                Login
              </Link>
            )}
          </li>
          {isLoggedIn && (
            <li className="hidden sm:flex items-center space-x-2">
              <img
                src={PROFILE_LOGO}
                alt="Profile"
                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
              />
              <span className="text-sm">Hi {username}!</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;