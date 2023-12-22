/* eslint-disable no-unused-vars */
import { Reorder } from "framer-motion";

import useApi from "../../../Hooks/useApi";
import { useState } from "react";

// import { useState } from "react"
const AllTask = () => {
  const [refetch, isLoading, data] = useApi("/allTasks");
  const [items, setItems] = useState(data);

  console.log(data);
  if (isLoading) {
    return (
      <div className="text-5xl text-white text-center flex justify-center items-center min-h-screen">
        Loading.....
      </div>
    );
  }
  return (
    <>
      <div className="relative flex flex-col w-full h-full overflow-y-hidden overflow-x-auto  backdrop-blur-md bg-white/10 shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="">
            <tr>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white text-xl opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white text-xl opacity-70">
                  Job
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white text-xl opacity-70">
                Status
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white text-xl opacity-70">
                 Deadline
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white opacity-70" />
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white opacity-70" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={task._id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block  font-sans antialiased font-normal leading-normal text-white">
                    {task.name}
                  </p>
                  <span className="text-sm text-gray-500">{task.email}</span>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <h3 className="block font-sans antialiased font-normal leading-normal text-white">
                    {task.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {task.descriptions}
                  </span>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans antialiased  leading-normal text-green-400 font-semibold capitalize">
                    {task.status}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans antialiased font-normal leading-normal text-white">
                   {task.deadline}
                  </p>
                </td>
              
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTask;
