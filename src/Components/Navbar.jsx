import { GrSend } from "react-icons/gr"
import { PiChatCircleText } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import logoImage from "../assets/img/healthcare.png"
import { useState } from "react";

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    console.log(clicked)
    return (
        <>
        <nav className="max-[640px]:hidden flex justify-between items-center border-b px-10 min-h-[60px]">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <ul className="flex justify-center items-center gap-5">
                <li className="tooltip tooltip-bottom" data-tip="Requests"><a href="#"><GrSend className="text-2xl"/></a></li>
                <li className="tooltip tooltip-bottom" data-tip="Chats"><a href="#"><PiChatCircleText className="text-2xl"/></a></li>
                <li className="tooltip tooltip-bottom" data-tip="Settings"><a href="#"><TbSettings className="text-2xl"/></a></li>
                <li>
                <a href="/" className="flex justify-center items-center">
                    <h3 className="text-base font-semibold mr-2">Higher Healthcare</h3>
                    <img src={logoImage} alt="healthcare profile image" className="rounded-full h-8 w-8"/>
                    </a>
                </li>
                
            </ul>
           
                
        </nav>
        <nav className="min-[640px]:hidden min-h-[72px] ">
        <div className=" bg-[#050849] text-white flex justify-between items-center border-b px-5 py-5 md:min-h-[60px]">
            <FaBars className="text-xl" onClick={()=>setClicked(!clicked)}/>
            
            <ul className="flex justify-center items-center gap-5">
                <li className="tooltip tooltip-bottom" data-tip="Chats"><PiChatCircleText className="text-2xl"/></li>
                <li>
                <a href="/" className="flex justify-center items-center">
                    <img src={logoImage} alt="healthcare profile image" className="rounded-full h-8 w-8"/>
                    </a>
                </li>
                
            </ul>
            
           
                
        </div>
        <h2 className="text-xl font-semibold ps-2">Dashboard</h2>
        </nav>
        </>
    );
};

export default Navbar;