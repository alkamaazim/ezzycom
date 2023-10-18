import React from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import CustomButton from "../../components/common/customButton";
import RatingStars from "../../components/common/ratingStars";

type Props = {};

const WishList = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-center py-5 w-full">
            <h2 className="text-xs text-custom-light-purple-color tracking-widest font-medium title-font mb-1">
              My Wishlist <i className="fa-solid fa-heart"></i>
            </h2>
          </div>
          <div className="-my-8 divide-y-2 divide-gray-100">
            {wishlistData.map((item, index) => (
              <div className="py-8 flex flex-wrap md:flex-nowrap" key={index}>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <img
                    alt="team"
                    className="flex-shrink-0 w-full h-40 object-cover px-3 object-center"
                    src="https://dummyimage.com/200x200"
                  ></img>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-custom-primary-color title-font mb-1">
                    {item.title}
                  </h2>
                  <h2 className="text-sm title-font text-custom-light-purple-color tracking-widest mb-2">
                    <span className="text-sm title-font text-custom-primary-color tracking-widest">
                      Category:{" "}
                    </span>
                    {item.category}
                  </h2>
                  <p className="leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <h2 className="text-custom-light-purple-color text-2xl font-medium title-font">
                      <span className="text-sm title-font text-custom-primary-color tracking-widest">
                        Price:{" "}
                      </span>{" "}
                      $ 0.90
                    </h2>
                    <h2 className="text-custom-light-purple-color font-medium title-font">
                      <span className="text-sm title-font text-custom-primary-color tracking-widest">
                        Stock status:{" "}
                      </span>{" "}
                      In stock
                    </h2>
                    <RatingStars />
                  </div>
                </div>
                <div className="md:flex-grow text-center">
                  <h2 className="text-sm title-font text-custom-light-purple-color tracking-widest">
                    Added on July 19, 2023
                  </h2>
                  <CustomButton
                    btnText="add to cart"
                    bgColor="custom-light-purple-color"
                    bgHover="custom-primary-color"
                    inlineClasses="inline-flex text-sm"
                  />
                  {" "}
                  <CustomButton
                    btnText="delete"
                    bgColor="custom-primary-color"
                    bgHover="custom-light-purple-color"
                    inlineClasses="inline-flex text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default WishList;

const wishlistData = [
  {
    title: "T-Shirt",
    category: "men",
    image: "",
    description:
      "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.",
  },
  {
    title: "T-Shirt",
    category: "men",
    image: "",
    description:
      "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.",
  },
  {
    title: "T-Shirt",
    category: "men",
    image: "",
    description:
      "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.",
  },
];
