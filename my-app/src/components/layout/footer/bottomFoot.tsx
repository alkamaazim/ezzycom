import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const BottomFoot = (props: Props) => {
  return (
    <React.Fragment>
      <div className="bg-custom-light-color">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">EzzyCom.</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2023 EzzyCom. —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @E-commerce.
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link to="#" className="w-5 h-5">
              <i className="fa-brands fa-facebook-f text-gray-500"></i>
            </Link>
            <Link to="#" className="w-5 h-5 ml-3">
              <i className="fa-brands fa-twitter text-gray-500"></i>
            </Link>
            <Link to="#" className="w-5 h-5 ml-3">
              <i className="fa-brands fa-instagram text-gray-500"></i>
            </Link>
            <Link to="#" className="w-5 h-5 ml-3">
              <i className="fa-brands fa-youtube text-gray-500"></i>
            </Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottomFoot;
