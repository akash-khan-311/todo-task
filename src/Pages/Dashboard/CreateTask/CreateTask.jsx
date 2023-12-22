import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axiosPublic from "../../../api/AxiosPublic";
import useAuth from "./../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CreateTask = () => {
  const [priorityValue, setPriorityValue] = useState("");
  const [minDate, setMinDate] = useState("");
  const [date, setDate] = useState(null);
  const { user } = useAuth();

  console.log('new date here',date)



  useEffect(() => {
    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const title = data.title;
    const priority = priorityValue;
    const descriptions = data.descriptions;

    try {
      const tasks = {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
        title: title,
        priority: priority,
        descriptions: descriptions,
        deadline: date,
        status: 'ongoing',
      };
      const { data } = await axiosPublic.post("/tasks", tasks);
      if (data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task has been created",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Task creation error", error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center my-10 text-white border-b-4 border-pink-600">
        Create Task Here
      </h2>
      <div>
        {/* Create new task */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-96 mx-auto backdrop-blur-3xl bg-white/10 p-8 rounded-md"
        >
          <h3 className="text-3xl text-center text-white border-b-2 mb-3">
            Create Task
          </h3>
          <div className="">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                {...register("title", { required: true })}
                name="title"
                type="text"
                className="peer w-full  backdrop-blur-sm bg-white/10 text-white font-sans font-normal  outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent  px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-white"
                placeholder=" "
              />
              {errors.title?.type === "required" && (
                <span className="text-red-500 py-2 ml-3 mb-10 flex ">
                  Title Field Is Required
                </span>
              )}
              <label className="flex w-full  select-none  pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[15px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-blue-gray-200 peer-focus:after:!border-white">
                Task Title
              </label>
            </div>
          </div>
          <div className="relative mt-14 min-w-[200px] ">
            <select
              onChange={(e) => setPriorityValue(e.target.value)}
              className="peer   backdrop-blur-sm bg-white/10 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans  font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option className="text-black" selected >
                Select Priority
              </option>
              <option className="text-black" value="Low">
                Low
              </option>
              <option className="text-black" value="Moderate">
                Moderate
              </option>
              <option className="text-black" value="High">
                High
              </option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none  absolute left-0 -top-1.5 flex  w-full select-none  font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              
            </label>
          </div>
       
          <div className="relative mt-5 min-w-[200px] flex justify-between items-center ">
            <label className="text-white font-semibold " htmlFor="dateInput">
              Select Date:
            </label>
            <input
            onChange={(e)=> setDate(e.target.value)}
              type="date"
              id="dateInput"
              name="dateInput"
              min={minDate}
              className="bg-transparent border  p-2 text-white "
            />
          </div>

          <div className="w-full mt-5">
            <div className="">
              <div className="relative w-full min-w-[200px]">
                <textarea
                  {...register("descriptions", { required: true })}
                  name="descriptions"
                  type="text"
                  className="peer  min-h-[100px] w-full backdrop-blur-sm bg-white/10 resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent  px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  defaultValue={""}
                />
                {errors.descriptions?.type === "required" && (
                  <p className="text-red-500 pb-2 ml-3">
                    Descriptions Field Is Required
                  </p>
                )}
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Description
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="custom-btn flex justify-center mx-auto"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
