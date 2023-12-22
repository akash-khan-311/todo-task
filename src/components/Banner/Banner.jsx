


import { Link } from "react-router-dom";


const Banner = () => {
  
  return (
    <div className="h-[90vh] flex items-center">
      <div className="w-4/6 mx-auto">
        {/* Banner Content */}
        <div className=" text-center  space-y-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            Simplify Your Tasks, Amplify Your Results with <span className="custom-text italic">TaskCraft</span>
          </h2>
          <p className="text-lg">
            Elevate your productivity with <span className="custom-text text-xl font-bold">TaskCraft</span>. Seamlessly manage tasks,
            collaborate effectively, and stay organized. Join us in creating a
            productive work environment tailored to your needs and goals.
          </p>
          <Link to={"/dashboard"} className="flex justify-center ">
            <button className="custom-btn">{`Let's Explore`}</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
