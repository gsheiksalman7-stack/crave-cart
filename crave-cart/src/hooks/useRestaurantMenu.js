import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    console.log(resId)
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;