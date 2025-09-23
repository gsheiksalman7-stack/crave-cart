import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-orange-100 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-3xl font-bold text-red-500 mb-2">Oops!</h1>
          <h2 className="text-xl text-gray-700 mb-4">Something went wrong.</h2>
          <p className="text-sm text-gray-600">
            {err?.status
              ? `${err.status} : ${err.statusText}`
              : "Unexpected error occurred."}
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
