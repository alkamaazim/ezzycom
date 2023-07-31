import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const DashboardCard = (props: Props) => {
  return (
    <React.Fragment>
      {cardData.map((item, index) => (
        <Link to={item.link} className="">
          <div key={index} className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64">
            <div>
              <i className={item.icon}></i>
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default DashboardCard;

const cardData = [
  {
    title: "Add Product",
    link: "/addproduct",
    icon: "fa-solid fa-circle-plus",
  },
];
