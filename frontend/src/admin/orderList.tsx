import React from "react";
import NavigationMenu from "./navigation";
import Sidebar from "./sidebar";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/common/customButton";
import PageTitle from "./pageTitle";

type Props = {};

const tableData = [
  {
    user: "Amit",
    productName: "T-Shirt(2), Shirt(3)",
    image: "",
    productQty: "5",
    orderPrice: "999",
    address: "Delhi",
  },
  {
    user: "Ravi",
    productName: "T-Shirt(1), Shirt(1)",
    image: "",
    productQty: "2",
    orderPrice: "599",
    address: "Mumbai",
  },
  {
    user: "Shubham",
    productName: "T-Shirt(2), Shirt(3)",
    image: "",
    productQty: "5",
    orderPrice: "999",
    address: "Bangalore",
  },
];

const OrderList = (props: Props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle title="Order List" backLink="/admindashboard" />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {[
                  "SNo.",
                  "Username",
                  "Product Name & Qty",
                  "Image",
                  "Total Qty",
                  "Order Price",
                  "Address",
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
                    {item.user}
                  </td>
                  <td className="px-6 py-4">{item.productName}</td>
                  <td className="px-6 py-4">{item.image}</td>
                  <td className="px-6 py-4">{item.productQty}</td>
                  <td className="px-6 py-4">{item.orderPrice}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">
                    <CustomButton
                      btnText="Unfulfilled"
                      bgColor="custom-primary-color"
                      bgHover="custom-light-purple-color"
                    />{" "}
                    <CustomButton
                      btnText="Cancle"
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

export default OrderList;
