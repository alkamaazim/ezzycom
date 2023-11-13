import Sidebar from "../common/sidebar";
import ProductListTable from "./productListTable";
import NavigationMenu from "../common/navigation";
import React, { useEffect, useState } from "react";
import { getData } from "../../adapters/coreServices";
import PageTitle from "../../widgets/global/pageTitle";

type Props = {};

const ProductList = (props: Props) => {
  const dummyApiObj = {
    items: [],
  };
  const [errrorMsgobj, setErrorMsgObj] = useState({
    msg: "",
    variant: "",
    status: false,
  });
  const [apiStatus, setApiStatus] = useState("");
  const [allProducts, setAllProducts] = useState(dummyApiObj);
  const [refreshOnDelete, setRefreshOnDelete] = useState(false);

  // API call to get list of all products === >>>
  useEffect(() => {
    const endPoint = "/products";
    setApiStatus("started");
    getData(endPoint)
      .then((res: any) => {
        if (res.data !== "" && res.status === 200) {
          setAllProducts(res.data);
        }
        setApiStatus("finished");
      })
      .catch((error: any) => {
        setErrorMsgObj({ msg: error.message, variant: "danger", status: true });
        setApiStatus("finished");
      });
  }, []);

  // referesh API on delete handler === >>>
  useEffect(() => {
    if (refreshOnDelete !== false) {
      const endPoint = "/products";
      setApiStatus("started");
      getData(endPoint)
        .then((res: any) => {
          if (res.data !== "" && res.status === 200) {
            setAllProducts(res.data);
          }
          setApiStatus("finished");
        })
        .catch((error: any) => {
          setErrorMsgObj({
            msg: error.message,
            variant: "danger",
            status: true,
          });
          setApiStatus("finished");
        });
    }
  }, [refreshOnDelete]);

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
        <ProductListTable
          apiStatus={apiStatus}
          allProducts={allProducts.items}
          setErrorMsgObj={setErrorMsgObj}
          setRefreshOnDelete={setRefreshOnDelete}
        />
      </main>
    </React.Fragment>
  );
};

export default ProductList;
