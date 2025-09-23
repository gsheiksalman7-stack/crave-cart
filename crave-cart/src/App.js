import { Provider, useDispatch } from "react-redux";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Loading from "./components/Loading";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Error from "./components/Error";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu")); //lazy loading

const AppLayout = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  },[]);

  return (
    <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={appStore}>
        <AppLayout />
      </Provider>
    ),
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Loading />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/Login", element: <Login /> },
    ],
    errorElement: <Error />,
  },
]);
