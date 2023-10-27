import React from "react";
import CustomButton from "../../widgets/buttons/customButton";
import ShippingList from "./shippingList";

type Props = {};

const CartPriceDetails = (props: Props) => {
  return (
    <React.Fragment>
      <div className="md:col-span-3">
        <div className="bg-gray-50 p-4 border-2 border-custom-light-purple-color w-full h-auto">
          <h2 className="text-xs title-font text-custom-light-purple-color tracking-widest">
            Enter Promo Code
          </h2>
          <form>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Promo Code"
                required
              />
              <CustomButton
                btnText="submit"
                bgColor="custom-primary-color"
                bgHover="custom-light-purple-color"
                inlineClasses="text-sm absolute right-2.5 bottom-2.5"
              />
            </div>
          </form>
          <ShippingList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPriceDetails;
