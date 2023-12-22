import {
  Collapse,
  Typography,
  IconButton,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import "./NavMenu.css";

const NavMneu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  console.log(isOpen);
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout Success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const NavList = () => {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-semibold text-white "
        >
          <NavLink
            to={"/"}
            className="flex items-center hover:text-pink-500 transition-colors"
          >
            Home
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-semibold text-white"
        >
          <NavLink
            to={"/about"}
            className="flex items-center hover:text-pink-500 transition-colors"
          >
            About
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-semibold text-white"
        >
          <NavLink
            to={"/dashboard"}
            className="flex items-center hover:text-pink-500 transition-colors"
          >
            Dashboard
          </NavLink>
        </Typography>
      </ul>
    );
  };

  const [openNav, setOpenNav] = useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="backdrop-blur-lg bg-white/20">
      <div className="container mx-auto px-4 md:px-0">
        <nav className="mx-auto  py-3 ">
          <div className="flex items-center justify-between ">
            <Typography className="mr-4 cursor-pointer py-1.5 text-5xl">
              <NavLink
                to={"/"}
                className="inline-block font-bold text-transparent bg-gradient-to-tr from-pink-900 to-red-900 bg-clip-text "
              >
                TaskCraft
              </NavLink>
            </Typography>
            <div className="hidden lg:flex items-center justify-center ">
              <NavList />

              {user ? (
                <div className=" relative hidden lg:block z-50">
                  <Avatar
                    onClick={() => setIsOpen(!isOpen)}
                    src={user && user?.photoURL}
                    alt="avatar"
                    withBorder={true}
                    className="p-0.5 cursor-pointer ml-5 "
                  />
                   {isOpen && (
                  <div className="absolute bg-blue-gray-800 divide-y  rounded-lg  right-0 z-50 ">
                    <div className="px-4 py-3 text-sm ">
                      <div className="">
                        <p className="text-lg text-white">
                          {user.displayName ? user.displayName : "No name"}
                        </p>
                      </div>
                      <p className="font-bold text-white">{user.email}</p>
                    </div>
                    <ul className="py-2 text-sm">
                      <li>
                        <Link
                          to={"/dashboard"}
                          className="block text-white font-bold px-4 py-2 hover:backdrop-blur-lg"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/settings"}
                          className="block font-bold px-4 py-2 text-white hover:backdrop-blur-lg"
                        >
                          Settings
                        </Link>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        onClick={handleLogout}
                        className="block px-4 text-white py-2 text-sm hover:backdrop-blur-lg  cursor-pointer"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
                </div>
              ) : (
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-semibold text-white"
                >
                  <Link
                    to={"/login"}
                    className="flex items-center hover:text-pink-500 transition-colors"
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-tr from-pink-900 to-red-900"
                    >
                      Login
                    </Button>
                  </Link>
                </Typography>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-trpink focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-10 w-10" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-10 w-10" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </nav>
      </div>
    </div>
  );
};

export default NavMneu;
