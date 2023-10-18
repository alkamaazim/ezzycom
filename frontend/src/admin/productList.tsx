import React from "react";
import NavigationMenu from "./navigation";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
// import PageTitle from "./pageTitle";
import CustomButton from "../components/common/customButton";

type Props = {};

const tableData = [
  {
    name: "Samsung Note 21",
    category: "Phones",
    price: "59999",
    stock: "32",
    description: "Samsung mobiles",
    image: "",
    discount: "200",
  },
  {
    name: "Realme 3C",
    category: "Phones",
    price: "8999",
    stock: "21",
    description: "Best Phone Under 9000 INR",
    image: "",
    discount: "25",
  },
  {
    name: "Polo T-shirt",
    category: "cloths",
    price: "999",
    stock: "321",
    description: "Clothing",
    image: "",
    discount: "19",
  },
];

const ProductList = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        {/* <PageTitle
          title="Product List"
          backLink="/admindashboard"
          addBtn={true}
        /> */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {[
                  "SNo.",
                  "Product name",
                  "Category",
                  "Price",
                  "Stock",
                  "Discount",
                  "Description",
                  "Image",
                  "Action",
                ].map((tableHead, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {tableHead}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.name}
                  </td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4">{item.discount}</td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">{item.image}</td>
                  <td className="px-6 py-4">
                    <CustomButton
                      icon="fa-solid fa-trash"
                      iconStatus={true}
                      bgColor="custom-primary-color"
                      bgHover="custom-light-purple-color"
                    />{" "}
                    <CustomButton
                      icon="fa-solid fa-pen-to-square"
                      iconStatus={true}
                      bgColor="custom-light-purple-color"
                      bgHover="custom-primary-color"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductList;
