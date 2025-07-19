import Dashhead from "../Components/Dashheader";
import Dashfooter from "../Components/Dashfooter";

const DashboardLayout = ({ children }) => (
  <>
    <Dashhead />
    {children}
    <Dashfooter />
  </>
);

export default DashboardLayout;
