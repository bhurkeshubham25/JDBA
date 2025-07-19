import Header from "../Components/Header";
import Footer1 from "../Components/footer1";
import { Outlet } from "react-router-dom";

const PublicLayout = ({ children }) => (
  <>
    <Header />
   <Outlet/>
    <Footer1 />
  </>
);

export default PublicLayout;
