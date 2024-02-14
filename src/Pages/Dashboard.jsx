import { useEffect, useState } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Map from "../Components/Map";
// import 'leaflet/dist/leaflet.css';


const Dashboard = () => {
    const [user, setUser] = useState([])
    const employees = [
        {name: 'Doru Mocanu', src: './../../src/assets/img/1.jpeg'},
        {name: 'Funmilade Shomade', src: './../../src/assets/img/2.jpeg'},
        {name: 'Paigy Leahy', src: './../../src/assets/img/3.jpeg'},
        {name: 'Dorcus Cadmus', src: './../../src/assets/img/4.jpeg'},
        {name: 'Olnarieju Oke', src: './../../src/assets/img/5.jpeg'},

    ]
    useEffect(()=>{
        fetch('users.json').then(res=>res.json()).then(data=>setUser(data))
    }, [])
    console.log(user)
    return (
        <div className="bg-[#FAFCFF] ps-6 pt-6">
            <div className="flex items-center gap-x-2">
                <img src={user[0]?.image} alt="users image" className="w-16 h-16 rounded-full outline outline-2 outline-gray-400" />
                <div>
                <h4 className="font-semibold text-lg pb-1">Hello, {user[0]?.name}</h4>
                <p>{user[0]?.email}</p>
                </div>
            </div>
            <div className="pt-10 grid md:grid-cols-3 grid-cols-1 gap-6 md:px-5">
            <div className="card md:max-w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title">Profit</h2>
    <select name="date" id="date" className="outline-none border-b">
        <option value="Today">Today</option>
        <option value="This Week" selected>This Week</option>
        <option value="Last Week">Last Week</option>
        <option value="This Month">This Month</option>
        <option value="Last Month">Last Month</option>
        <option value="Custom">Custom</option>
    </select>
    </div>
    <hr />
    <div className="flex justify-between mb-2">
    <p>Revenue</p>
    <p className="text-right">$0</p>
    </div>
    <hr />
    <div className="flex justify-between mb-2">
    <p>Expense</p>
    <p className="text-right">$0</p>
    </div>
    <hr />
    <div className="flex justify-between">
    <p>Profit</p>
    <p className="text-right">$0</p>
    </div>
    <hr />
    <div className="flex justify-between py-12">
      <h5>Margin</h5>
      <p className="text-right text-2xl text-[#6467EF] font-bol">0%</p>
    </div>
  </div>
            </div>
            <div className="card md:max-w-96 bg-base-100 shadow-xl ">
  <div className="card-body px-0">
    <div className="flex justify-between pt-8 px-5">
    <h2 className="card-title">Employees</h2>
    <select name="date" id="date" className="outline-none border-b">
        <option value="Today">Today</option>
        <option value="This Week" selected>This Week</option>
        <option value="Last Week">Last Week</option>
        <option value="This Month">This Month</option>
        <option value="Last Month">Last Month</option>
        <option value="Custom">Custom</option>
    </select>
    </div>
    <hr />
    <div className="mb-2 ps-5">
    <p>Downloaded</p>
    <p className="font-semibold">No users</p>
    </div>
    <hr />
    <div className="mb-2 ps-5">
    <p>Birthdays ({employees.length})</p>
    <div className="flex items-center gap-5">
        {employees.map((employee, index) => <button key={index} className="tooltip mt-2" data-tip={employee.name} > <img  src={employee.src} alt={employee.name} className="w-8 h-8 rounded-full" /></button>)}
    </div>
    </div>
    <hr />
    <div className="flex gap-4 px-5 text-xs pt-2">
    <div className="text-center">
    <p>New Employees</p>
    {/* No of new employees to be inserted here after fetching */}
    <p className="pt-2">0</p>
    </div>
    <div className="text-center">
    <p>Total Employees</p>
    {/* No of Total employees to be inserted here after fetching */}
    <p className="pt-2">286</p>
    </div>
    <div className="text-center">
    <p>Stopped Working</p>
    {/* No of Stopped working employees to be inserted here after fetching */}
    <p className="pt-2">0</p>
    </div>
    </div>
  </div>
            </div>
            <div className="card md:max-w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title">Timesheet</h2>
    <select name="date" id="date" className="outline-none border-b">
        <option value="Today">Today</option>
        <option value="This Week" selected>This Week</option>
        <option value="Last Week">Last Week</option>
        <option value="This Month">This Month</option>
        <option value="Last Month">Last Month</option>
        <option value="Custom">Custom</option>
    </select>
    </div>
    <hr />
<Map />
    
  </div>
            </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;