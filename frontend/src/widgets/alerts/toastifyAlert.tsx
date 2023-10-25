import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const MessageToastifyAlert = (props: Props) => {
  // const notify = () => toast("Wow so easy!");
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default MessageToastifyAlert;
