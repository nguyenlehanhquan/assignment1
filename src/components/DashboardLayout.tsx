import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";
import DashboardNavigator from "./DashboardNavigator.tsx";


function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Header/>
        <div className="flex flex-col items-center justify-center">
            <DashboardNavigator/>
            <Outlet/>
        </div>

    </div>
  );
}

export default DashboardLayout;