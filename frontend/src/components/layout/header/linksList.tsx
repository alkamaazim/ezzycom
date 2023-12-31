import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const LinksList = (props: Props) => {
  return (
    <React.Fragment>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {listData.map((list, index) => (
            <li key={index}>
              <Link
                to={list.link}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default LinksList;

type TListData = {
    title: string,
    link: string,
}

const listData: TListData[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop All",
    link: "#",
  },
  {
    title: "Shop Men",
    link: "#",
  },
  {
    title: "Shop Women",
    link: "#",
  },
  {
    title: "Get in Touch!",
    link: "#",
  },
];
