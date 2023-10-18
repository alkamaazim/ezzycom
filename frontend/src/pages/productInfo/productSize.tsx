import React from "react";

type Props = {};

const ProductSizeAndColor = (props: Props) => {
  return (
    <React.Fragment>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div className="flex">
          <span className="mr-3">Color</span>
          <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
          <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
        </div>
        <div className="flex ml-6 items-center">
          <span className="mr-3">Size</span>
          <div className="relative">
            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSizeAndColor;
