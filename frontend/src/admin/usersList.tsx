import React from "react";
import NavigationMenu from "./navigation";
import Sidebar from "./sidebar";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/common/customButton";
import PageTitle from "./pageTitle";

type Props = {};

const tableData = [
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    phone: "9999999999",
    gender: "Male",
    dp: "",
    address: "Delhi",
  },
  {
    name: "Kriti",
    email: "kriti@gmail.com",
    phone: "9999999999",
    gender: "Female",
    dp: "",
    address: "Noida",
  },
  {
    name: "Shubham",
    email: "shubham@gmail.com",
    phone: "9999999999",
    gender: "Male",
    dp: "",
    address: "Bangalore",
  },
];

const UserList = (props: Props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle title="User List" backLink="/admindashboard" />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {[
                  "SNo.",
                  "Name",
                  "Email",
                  "Phone",
                  "Dp",
                  "Gender",
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
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.name}
                  </td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.gender}</td>
                  <td className="px-6 py-4">{item.dp}</td>
                  <td className="px-6 py-4">{item.address}</td>
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

export default UserList;
