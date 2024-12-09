import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src="images/clock.svg"
          alt="Analog Table Clock"
          className="w-20 h-20 rounded-full"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Analog Table Clock
        </h2>
        <p className="text-gray-500">General</p>
      </div>

      {/* Divider */}
      <div className="border-t my-4"></div>

      {/* Product Info */}
      <div className="space-y-4">
        {/* In Stock */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">inventory_2</span>
          <p className="font-medium text-gray-700">In Stock</p>
          <span className="ml-auto text-gray-500">9,520</span>
        </div>

        {/* Colors */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">palette</span>
          <p className="font-medium text-gray-700">Colors</p>
          <span className="ml-auto text-gray-500">
            Black, White, Blue, Yellow
          </span>
        </div>

        {/* Start Time */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">calendar_today</span>
          <p className="font-medium text-gray-700">Start Time</p>
          <span className="ml-auto text-gray-500">September 30, 2018</span>
        </div>

        {/* Lifetime Sells */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">sell</span>
          <p className="font-medium text-gray-700">Lifetime Sells</p>
          <span className="ml-auto text-gray-500">40,02,030</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
