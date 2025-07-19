import Header from "../Components/Header";
import Footer1 from "../Components/footer1";

const PublicLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer1 />
  </>
);

export default PublicLayout;
