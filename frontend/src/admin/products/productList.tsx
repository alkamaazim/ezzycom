import React, { useMemo } from "react";
import Sidebar from "../common/sidebar";
import PageTitle from "../../widgets/global/pageTitle";
// import { useTable } from "react-table";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationMenu from "../common/navigation";
import CustomButton from "../../widgets/buttons/customButton";

type Props = {};

const ProductList = (props: Props) => {
  // const tableColumn = [
  //   {
  //     Header: "Product Name",
  //     accessor: "name",
  //   },
  //   {
  //     Header: "Category",
  //     accessor: "category",
  //   },
  //   {
  //     Header: "Price",
  //     accessor: "price",
  //   },
  //   {
  //     Header: "Stock",
  //     accessor: "stock",
  //   },
  //   {
  //     Header: "Discount",
  //     accessor: "discount",
  //   },
  //   {
  //     Header: "Actions",
  //     Cell: ({ row }: any) => <span></span>,
  //   },
  // ];

  // const columns = useMemo(() => tableColumn, []);
  // const data = useMemo(() => guestUsersData, [guestUsersData]);
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });

  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle
          title="Product List"
          backLink="/admindashboard"
          addBtn={true}
        />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {[
                  "#",
                  "Product name",
                  "Category",
                  "Price",
                  "Stock",
                  "Discount",
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
                  <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-4 py-2 font-medium text-gray-500 whitespace-nowrap"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="w-auto h-8 mr-3"
                    />
                    {item.name}
                  </th>
                  <td className="px-4 py-2">
                    <span className="bg-custom-light-color text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{item.price}/-</td>
                  <td className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="inline-block w-4 h-4 mr-2 bg-green-300 rounded-full"></div>
                      {item.stock}
                    </div>
                  </td>
                  <td className="px-6 py-4">{item.discount}</td>
                  <td className="px-6 py-4">
                    <CustomButton
                      icon="fa-solid fa-pen-to-square"
                      iconStatus={true}
                      bgColor="custom-primary-color"
                      bgHover="custom-light-purple-color"
                    />{" "}
                    <CustomButton
                      icon="fa-solid fa-trash"
                      iconStatus={true}
                      bgColor="custom-primary-color"
                      bgHover="custom-light-purple-color"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* <Table borderless striped {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup: any, index: number) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column: any, index: number) => (
                <th {...column.getHeaderProps()} key={index}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps}>
          {rows.map((row: any, index: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell: any, index: number) => (
                  <td {...cell.getCellProps()} key={index}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table> */}
    </React.Fragment>
  );
};

export default ProductList;

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
