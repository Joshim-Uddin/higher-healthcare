import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";
import logo from '../assets/img/fav.png'
import { useState } from "react";
const Sidebar = () => {
    const [open, setOpen] = useState(true)

    const menus = [
        {title:'Employees', src: 'user.svg'},
        {title:'Scheduling', src: 'schedule.svg'},
        {title:'Timesheet', src: 'time.svg'},
        {title:'Communication', src: 'communication.svg'},
        {title:'Reports', src: 'reports.svg'},
        {title:'CRM', src: 'crm.svg'},
        {title:'Payroll', src: 'payroll.svg'},
        {title:'Workflows', src: 'workflows.svg'},
        {title:'Compliance', src: 'companies.svg'}
    ]
    return (
        <div className={`h-screen bg-[#262F5B] duration-200  text-white relative ${open?'w-64':'w-20'}`}>
            <div className="absolute top-20 -right-4 cursor-pointer text-white text-xl p-2 w-10 h-10 flex justify-center items-center outline outline-1 outline-white rounded-full bg-[#645DF6]" onClick={()=>setOpen(!open)}>
            {open?<FaArrowLeft />:<HiBars3BottomLeft />}
            </div>
            <div className={`flex gap-x-5 justify-start items-center min-h-[60px] ${open?'bg-[#444677]':''} ps-5`}>
                <img src={logo} alt="higher healthcare logo" className="w-10"  />
                <p className={`${!open?"hidden":"text-lg"}`}>Dashboard</p>
            </div>

            <ul className="flex flex-col items-center pt-10">
            {menus.map((menu, index)=> 
            <li key={index} className="py-3 hover:bg-[#444676] origin-left duration-200 w-full ps-5">
                    <a href="/" className="flex gap-x-3">
                    <img src={`/src/assets/img/icons/${menu.src}`} alt=""  className=""/>
                    <p className={`${!open?'hidden':''}`}>{menu.title}</p>
                    </a>
                </li>
            )}
            </ul>

            <div className="rounded-full bg-[#645DF6] cursor-pointer outline outline-1 outline-white p-2 w-8 h-8 flex items-center absolute bottom-2 left-5">
                <p className="text-xl">JK</p>
            </div>
        </div>
    );
};

export default Sidebar;