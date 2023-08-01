import React from "react";
import NavigationMenu from "./navigation";
import Sidebar from "./sidebar";
import CustomButton from "../components/common/customButton";
import PageTitle from "./pageTitle";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
      <PageTitle title="Add Product" backLink="/admindashboard" />
        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Name"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Category Name"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Price"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="stock"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Stock
              </label>
              <input
                type="text"
                name="stock"
                id="stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Stock"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="discount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Discount
              </label>
              <input
                type="discount"
                name="discount"
                id="discount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Discount"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="description"
                name="description"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Description"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full mb-3">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className="w-8 h-8 text-gray-500">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <CustomButton
            btnText="Add"
            bgColor="custom-primary-color"
            bgHover="custom-light-purple-color"
            inlineClasses=""
          />{" "}
          <CustomButton
            type="reset"
            btnText="Reset"
            bgColor="custom-light-purple-color"
            bgHover="custom-primary-color"
            inlineClasses=""
          />
        </form>
      </main>
    </React.Fragment>
  );
};

export default AddProduct;
