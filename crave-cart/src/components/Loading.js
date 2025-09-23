import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mx-auto mb-4"></div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-gray-700">
          Loading, please wait...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
