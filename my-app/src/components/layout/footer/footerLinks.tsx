import React from "react";

type Props = {};

export const FooterLinks1 = (props: Props) => {
  return (
    <React.Fragment>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </React.Fragment>
  );
};

export const FooterLinks2 = (props: Props) => {
  return <React.Fragment>FooterLinks</React.Fragment>;
};

export const FooterLinks3 = (props: Props) => {
  return <React.Fragment>FooterLinks</React.Fragment>;
};

const links1Data = [
    {
        title:"Link 1"
    }
]
