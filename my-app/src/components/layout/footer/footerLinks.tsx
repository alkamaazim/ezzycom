import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const headTitle = (
  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    CATEGORIES2
  </h2>
);

export const FooterLinks1 = (props: Props) => {
  return (
    <React.Fragment>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        {headTitle}
        <nav className="list-none mb-10">
          {links1Data.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                className="text-gray-600 hover:text-gray-800"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export const FooterLinks2 = (props: Props) => {
  return (
    <React.Fragment>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        {headTitle}
        <nav className="list-none mb-10">
          {links1Data.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                className="text-gray-600 hover:text-gray-800"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export const FooterLinks3 = (props: Props) => {
  return (
    <React.Fragment>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        {headTitle}
        <nav className="list-none mb-10">
          {links1Data.map((link, index) => (
            <li key={index}>
              <Link
                to={link.link}
                className="text-gray-600 hover:text-gray-800"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

const links1Data = [
  {
    title: "Categories 1",
    link: "#",
  },
  {
    title: "Categories 2",
    link: "#",
  },
  {
    title: "Categories 3",
    link: "#",
  },
  {
    title: "Categories 4",
    link: "#",
  },
];
