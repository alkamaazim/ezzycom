import Sidebar from "../common/sidebar";
import { ThreeDots } from "react-loader-spinner";
import NavigationMenu from "../common/navigation";
import React, { useState, useEffect } from "react";
import { getData } from "../../adapters/coreServices";
import PageTitle from "../../widgets/global/pageTitle";
import CustomButton from "../../widgets/buttons/customButton";
import AlertMessageComponent from "../../widgets/alerts/alert";

type Props = {};

const UserList = (props: Props) => {
  const dummyApiObj = {
    items: [],
  };
  const [errrorMsgobj, setErrorMsgObj] = useState({
    msg: "",
    variant: "",
    status: false,
  });
  const [apiStatus, setApiStatus] = useState("");
  const [allUsers, setAllUsers] = useState(dummyApiObj);

  // API call to get all users list === >>>
  useEffect(() => {
    setApiStatus("started");
    const endPoint = "/users";
    getData(endPoint)
      .then((res: any) => {
        if (res.data !== "" && res.status === 200) {
          setAllUsers(res.data);
        }
        setApiStatus("finished");
      })
      .catch((error: any) => {
        setErrorMsgObj({ msg: error.message, variant: "danger", status: true });
        setApiStatus("finished");
      });
  }, []);

  // get selected gender in string type === >>>
  const getSelectedGender = (genderValue: number) => {
    if (genderValue === 0) {
      return "male";
    } else if (genderValue === 1) {
      return "female";
    } else {
      return "other";
    }
  };

  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle title="User List" backLink="/admindashboard" />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          {errrorMsgobj.status !== false && (
            <AlertMessageComponent
              msgText={errrorMsgobj.msg}
              variant={errrorMsgobj.variant}
            />
          )}
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
              {allUsers.items.map((item: any, index: number) => (
                <tr key={item.id} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.username}
                  </td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.dp}</td>
                  <td className="px-6 py-4">
                    {getSelectedGender(item.gender)}
                  </td>
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
          {apiStatus === "started" && allUsers.items.length === 0 && (
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#5856d6"
              ariaLabel="three-dots-loading"
              wrapperStyle={{
                display: "flex",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
              }}
              // wrapperClassName="text-center"
              visible={true}
            />
          )}
          {apiStatus === "finished" && allUsers.items.length === 0 && (
            <AlertMessageComponent
              msgText="No record found!"
              variant="warning"
            />
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default UserList;
