import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";
import logo from '../assets/img/fav.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const {open, setOpen} = useContext(AuthContext)

    const menus = [
        {title:'Employees', src: 'user.svg', routes: '/employees'},
        {title:'Scheduling', src: 'schedule.svg', routes: '/schedule'},
        {title:'Timesheet', src: 'time.svg' , routes: '/timesheet'},
        {title:'Communication', src: 'communication.svg' , routes: '/communication'},
        {title:'Reports', src: 'reports.svg' , routes: '/reports'},
        {title:'CRM', src: 'crm.svg' , routes: '/crm'},
        {title:'Payroll', src: 'payroll.svg' , routes: '/payroll'},
        {title:'Workflows', src: 'workflows.svg' , routes: '/workflows'},
        {title:'Compliance', src: 'companies.svg' , routes: '/compliance'},
    ]
    return (
        <div className={`h-screen bg-[#262F5B] duration-200  text-white relative ${open?'w-64':'w-20'}`}>
            <div className="absolute top-20 -right-4 cursor-pointer text-white text-xl p-2 w-10 h-10 flex justify-center items-center outline outline-1 outline-white rounded-full bg-[#645DF6]" onClick={()=>setOpen(!open)}>
            {open?<FaArrowLeft />:<HiBars3BottomLeft />}
            </div>
            <div className={`flex gap-x-5 justify-start items-center min-h-[60px] ${open?'bg-[#444677]':''} ps-5`}>
                <img src={logo} alt="higher healthcare logo" className="w-10"  />
                <Link to='/'>
                <p className={`${!open?"hidden":"text-lg"}`}>Dashboard</p>
                </Link>
            </div>

            <ul className="flex flex-col items-center pt-20">
            {menus.map((menu, index)=> 
            <li key={index} className="py-3 hover:bg-[#444676] origin-left duration-200 w-full ps-5">
                    <a href={menu.routes} className="flex gap-x-3">
                    <img src={`/src/assets/img/icons/${menu.src}`} alt=""  className=""/>
                    <p className={`${!open?'hidden':''}`}>{menu.title}</p>
                    </a>
                </li>
            )}
            </ul>

            <div className="rounded-full bg-[#645DF6] cursor-pointer outline outline-1 outline-white p-2 w-8 h-8 flex items-center absolute bottom-4 left-5">
                <p className="text-xl">JK</p>
            </div>
        </div>
    );
};

export default Sidebar;