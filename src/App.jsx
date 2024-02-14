import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SidebarMenu from "./Components/Sidebar";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
//import Dashboard from "./Pages/Dashboard";

const App = () => {
  const {open} = useContext(AuthContext)
  console.log(open)
  return (
    <div className="relative">
      <div className="absolute">
      <SidebarMenu />
      </div>
      <div className={`${open?'ps-64':'ps-20'}`}>
      <Navbar />
      {/* <Dashboard /> */}
      <Outlet />
      </div>
    </div>
  );
};

export default App;