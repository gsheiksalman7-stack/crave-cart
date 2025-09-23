import React, { useEffect, useState } from "react";
import RestaurantCard, { offerCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resData, setResData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const CardWithOffer = offerCard(RestaurantCard);
  const [currentPage, setCurrentPage] = useState(1); // current page number
  const itemsPerPage = 10; // number of restaurants per page

  useEffect(() => {
    fetchData();
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    const cacheKey = "swiggy_restaurants";
    const cacheExpiryKey = "swiggy-restaurants_expiry";
    const now = new Date().getTime();
    const expiryTime = 1000 * 60 * 10;

    const cached = localStorage.getItem(cacheKey);
    const cachedExpiry = localStorage.getItem(cacheExpiryKey);

    if (cached && cachedExpiry && now < parseInt(cachedExpiry)) {
      const parsed = JSON.parse(cached);
      setResData(parsed);
      setFilteredRestaurant(parsed);
      return;
    }

    const apiUrl =
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(apiUrl);
    const json = await response.json();

    const cards = json?.data?.cards || [];

    const restaurantListCard = cards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        card?.card?.card?.restaurants
    );

    const restaurants =
      restaurantListCard?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      restaurantListCard?.card?.card?.restaurants ||
      [];

    localStorage.setItem(cacheKey, JSON.stringify(restaurants));
    localStorage.setItem(cacheExpiryKey, now + expiryTime);

    setResData(restaurants);

    setFilteredRestaurant(restaurants);
  };

  const filteredData = () => {
    const filteredList = resData.filter((res) => res?.info?.avgRating >= 4.5);
    setFilteredRestaurant(filteredList);
    setCurrentPage(1);
  };

  const filteredSearch = () => {
    const filteredRes = resData.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRes);
    setCurrentPage(1);
  };

  const paginatedRestaurants = filteredRestaurant.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-lime-50">
        <div className="gap-2 max-w-xs lg:max-w-md mx-auto">
          <div className="m-3.5 p-2 grid grid-rows-3 lg:block ">
            <input
              type="text"
              data-testid="searchInput"
              className="px-2 py-1 border border-solid border-black mr-2.5 bg-white lg:w-full sm:w-auto flex-grow rounded-md"
              value={searchText}
              placeholder="Search restaurants..."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="bg-green-300 px-2 py-1 rounded-md font-semibold sm:ml-0 lg:ml-8 my-2"
              onClick={filteredSearch}
            >
              Search
            </button>
            <button
              className="filter-btn bg-green-300 px-2 py-1 ml-0 lg:ml-8 rounded-md font-semibold"
              onClick={filteredData}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ml-16 lg:ml-0 p-2 lg:p-4">
          {paginatedRestaurants?.length > 0 &&
            paginatedRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant.info.aggregatedDiscountInfoV3 ? (
                  <CardWithOffer resdata={restaurant} />
                ) : (
                  <RestaurantCard resdata={restaurant} />
                )}
              </Link>
            ))}
        </div>
        <div className="flex justify-center my-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 mx-1 bg-green-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="font-semibold text-sm bg-white px-3 py-1 rounded shadow">
            Page {currentPage}
          </span>
          <button
            disabled={currentPage * itemsPerPage >= filteredRestaurant.length}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 mx-1 bg-green-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg sm:hidden"
        >
          ↑ Top
        </button>
      )}
      <Footer />
    </>
  );
};

export default Body;
