import Sidebar from "../common/sidebar";
import DashboardCard from "./dashboardCard";
import React, {useState, useEffect} from "react";
import NavigationMenu from "../common/navigation";
import { getData } from "../../adapters/coreServices";

type Props = {};

const AdminDashboard = (props: Props) => {

  return (
    <React.Fragment>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <NavigationMenu />
        <Sidebar />
        <main className="p-4 md:ml-64 h-auto pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <DashboardCard />
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4"></div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
