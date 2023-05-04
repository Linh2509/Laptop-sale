import { Outlet } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider.jsx";
import Header from "../Header";
import Footer from "../Footer";
import HeaderUser from "../HeaderUser";

function DefaultLayout() {
  const { token } = useStateContext();

  return (
    <div>
      {!token && <Header />}
      {token && <HeaderUser />}
      <Outlet />
      <Footer />
    </div>
   );
}

export default DefaultLayout;
