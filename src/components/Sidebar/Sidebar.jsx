import { useState } from "react";
import { MdTask  } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FaTasks,FaHome  } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import MenuItems from "../MenuItems/MenuItems";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Sidebar = () => {
    
  const [isActive, setIsActive] = useState(false);
    const {logout,user} = useAuth()
  const handleToggle = () => {
    setIsActive(!isActive);
  };


  const handleLogout = async()=> {
    await logout();
    toast.success('user logged out')
  }


  return (
    <>
      <div className="backdrop-blur-2xl bg-white/20 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <h2 className="text-3xl">TaskCraft</h2>
          </div>
        </div>

        <button onClick={handleToggle} className="p-4 focus:outline-none ">
          toogle
        </button>
      </div>

      {/* sidebar */}

      <div
        className={`z-10 backdrop-blur-lg bg-white/20 md:fixed flex flex-col justify-between overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-32 mx-auto ">
            <img className="w-full rounded-full" src={user && user.photoURL } alt="" />
          </div>
            <h2 className="text-3xl text-white text-center py-1">{user && user.displayName}</h2>
           
        <hr />
      
        <MenuItems
          icon={IoIosCreate}
          label={"Create Task"}
          address={"/dashboard/createtask"}
        />
        <MenuItems
          icon={FaTasks}
          label={"All Task"}
          address={"/dashboard/alltask"}
        />
        <MenuItems
          icon={MdTask}
          label={"Your Task"}
          address={"/dashboard/yourtask"}
        />
        </div>

        <div>
          <hr />
          <MenuItems
          icon={FaHome}
          label={"Back To Home"}
          address={"/"}
        />
          <button
        onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-red-300 transition-colors duration-300 transform"
          >
            <CgLogOut className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
