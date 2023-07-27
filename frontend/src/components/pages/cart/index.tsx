import React from "react";
import CartPriceDetails from "./cartPriceDetails";
import CustomButton from "../../common/customButton";
import RatingStars from "../../common/ratingStars";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

type Props = {};

const Cart = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col text-center py-5 w-full">
            <h2 className="text-xs text-custom-light-purple-color tracking-widest font-medium title-font mb-1">
              My Cart <i className="fa-solid fa-heart"></i>
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-9 p-4">
              <div className="-my-8 divide-y-2 divide-gray-100">
                {wishlistData.map((item, index) => (
                  <div
                    className="py-8 flex flex-wrap md:flex-nowrap"
                    key={index}
                  >
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
                        Added on July 19
                      </h2>
                      <CustomButton
                        bgColor="custom-light-purple-color"
                        bgHover="custom-primary-color"
                        inlineClasses="inline-flex text-sm"
                        iconStatus={true}
                        icon="fa-solid fa-cart-shopping"
                      />{" "}
                      <CustomButton
                        bgColor="custom-primary-color"
                        bgHover="custom-light-purple-color"
                        inlineClasses="inline-flex text-sm"
                        iconStatus={true}
                        icon="fa-solid fa-trash"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CartPriceDetails />
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;

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
