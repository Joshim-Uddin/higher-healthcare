import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SidebarMenu from "./Components/Sidebar";

const App = () => {
  return (
    <div className="grid grid-cols-6">
      <SidebarMenu />
      <div className="col-span-5">
      <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default App;