import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoardLayout from "../Layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import AllTask from "../Pages/Dashboard/AllTask/AllTask";
import YourTask from "../Pages/Dashboard/YourTask/YourTask";


const Router = createBrowserRouter([
    {path:'/', element: <Root/>, children: [
        {path:'/', element:<Home/>},
        {path:'/login', element: <Login/>},
        {path:'/register', element: <Register/>}
    ]},
    {path:'/dashboard', element: <PrivateRoutes><DashBoardLayout/></PrivateRoutes> , children: [
        {path:'createtask', element: <CreateTask/>},
        {path:'alltask', element: <AllTask/>},
        {path:'yourtask', element: <YourTask/>}
    ]}
])

export default Router