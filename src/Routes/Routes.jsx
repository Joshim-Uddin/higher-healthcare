import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard";
import Employees from "../Pages/Employees";
import Schedule from "../Pages/Schedule";
import TimeSheet from "../Pages/TimeSheet";
import Communication from "../Pages/Communication";
import Reports from "../Pages/Reports";
import Crm from "../Pages/CRM";
import Payroll from "../Pages/Payroll";
import Workflows from "../Pages/Workflows";
import Compliance from "../Pages/Compliance";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/employees',
                element: <Employees />
            },
            {
                path: '/schedule',
                element: <Schedule />
            },
            {
                path: '/timesheet',
                element: <TimeSheet />
            },
            {
                path: '/communication',
                element: <Communication />
            },
            {
                path: '/reports',
                element: <Reports />
            },
            {
                path: '/crm',
                element: <Crm />
            },
            {
                path: '/payroll',
                element: <Payroll />
            },
            {
                path: '/workflows',
                element: <Workflows />
            },
            {
                path: '/compliance',
                element: <Compliance />
            }
        ]
    }
])

const Routes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;