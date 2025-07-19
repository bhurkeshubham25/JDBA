import Dashhead from "../Components/Dashheader";
import Dashfooter from "../Components/Dashfooter";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => (
  <>
    <Dashhead />
    <Outlet/>
    <Dashfooter />
  </>
);

export default DashboardLayout;
