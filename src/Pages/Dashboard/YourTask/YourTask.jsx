/* eslint-disable no-unused-vars */

import useApi from "../../../Hooks/useApi";
import useAuth from "../../../Hooks/useAuth";

const YourTask = () => {
  const { user } = useAuth();
  const [refetch, isLoading, data] = useApi(`/tasks?email=${user.email}`);
  if (isLoading)
    return (
      <div className="text-5xl text-white text-center flex justify-center items-center min-h-screen">
        Loading.....
      </div>
    );
  console.log(data);
  return (
    <div>
      <div className="relative flex flex-col w-full h-full overflow-y-hidden overflow-x-auto text-gray-700 backdrop-blur-md bg-white/20 shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white opacity-70">
                  Task Title
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white opacity-70">
                  Status
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 ">
                <p className="block font-sans antialiased font-normal leading-none text-white opacity-70">
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
                    {`${task.descriptions.slice(0, 20)} .....`}
                  </span>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans antialiased font-normal leading-normal text-white">
                    {task.status}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans antialiased font-normal leading-normal text-white">
                    {task.deadline}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button className="block font-sans antialiased text-sm  bg-green-600 px-2 rounded text-white ">
                    Edit
                  </button>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button className="block font-sans antialiased text-sm  bg-red-600 px-2 rounded text-white ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YourTask;
