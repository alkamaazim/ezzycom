import React from "react";
import NavigationMenu from "./navigation";
import Sidebar from "./sidebar";
import PageTitle from "./pageTitle";
import CustomButton from "../components/common/customButton";

type Props = {};

const AddCategory = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle title="Add Category" backLink="/admindashboard" />
        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Category Name"
                required
              />
            </div>
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

export default AddCategory;
