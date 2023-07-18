import React from "react";
import { FooterLinks1, FooterLinks2, FooterLinks3 } from "./footerLinks";
import Subscribe from "./subscribe";
import BottomFoot from "./bottomFoot";

type Props = {};

const Footer = (props: Props) => {
  return (
    <React.Fragment>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <FooterLinks1 />
            <FooterLinks2 />
            <FooterLinks3 />
            <Subscribe />
          </div>
        </div>
        <BottomFoot />
      </footer>
    </React.Fragment>
  );
};

export default Footer;
