import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { login, loading, googleLogin, user } = useAuth();
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      await login(email, password);

      navigate("/dashboard");
      toast.success("login successfully");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      navigate("/dashboard");
      toast.success("login successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      {user ? (
        <div>
          {" "}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white capitalize backdrop-blur-md bg-white/10 p-4 rounded">
            your are already loged in
          </h2>
          <Link to={'/dashboard'}>
            <button className="text-lg text-white flex justify-center mx-auto bg-pink-700 py-1 px-3 rounded-md mt-5">
              Go to Dashboard
            </button>
          </Link>
        </div>
      ) : (
        <div className="relative flex flex-col text-white backdrop-blur-xl min-w-96 bg-white/20 shadow-md  rounded-xl bg-clip-border">
          <div className="relative grid mb-4  overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-900 to-red-900 bg-clip-border shadow-gray-900/20">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Sign In
            </h3>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-6"
          >
            <div className="relative  w-full min-w-[200px]">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="w-full h-full px-3 py-3 font-sans  font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-white outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 pt-2 ml-3">
                  Email Field Is Required
                </p>
              )}
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[15px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:textwhite peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[15px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative  w-full min-w-[200px]">
              <input
                {...register("password", { required: true, minLength: 8 })}
                type={showPassword ? "password" : "text"}
                name="password"
                className="w-full h-full px-3 py-3 font-sans font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-white outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 pt-2 ml-3">Enter your password</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 pt-2 ml-3">
                  Password Must have at least 8 characters
                </p>
              )}
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[15px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:textwhite peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[15px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
              <div onClick={() => setShowPassword(!showPassword)} className="">
                {showPassword ? (
                  <AiOutlineEye className="absolute right-3 bottom-3 text-xl cursor-pointer text-white" />
                ) : (
                  <AiOutlineEyeInvisible className="absolute right-3 bottom-3 text-xl cursor-pointer text-white" />
                )}
              </div>
            </div>
            <div className="-ml-2.5">
              <div className="inline-flex items-center">
                <label
                  htmlFor="checkbox"
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-pink-500 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-white cursor-pointer select-none"
                  htmlFor="checkbox"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <button className="custom-btn w-full" type="submit">
              {loading ? "Loading......." : "Log In"}
            </button>
          </form>
          <div className="">
            <hr />
          </div>
          <div className="p-6 pt-5">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="text-white bg-[#4285F4] w-full flex justify-center hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center  mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
              Sign in with Google
            </button>

            <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Do not have an account?
              <Link
                to="/register"
                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-pink-600  hover:underline "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
