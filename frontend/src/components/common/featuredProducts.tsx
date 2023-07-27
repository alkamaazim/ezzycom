import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <React.Fragment>
      <section className="text-gray-600 body-font bg-custom-light-purple-color">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {collectionsData.map((item, index) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                <Link
                  to={`/productinfo/${item.id}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-custom-black-color">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeaturedProducts;

const collectionsData = [
  {
    id: 1,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 2,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 3,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 4,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 5,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 6,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 7,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
  {
    id: 8,
    category: "CATEGORY",
    title: "The Catalyzer",
    price: "$16.00",
    image: "",
  },
];
