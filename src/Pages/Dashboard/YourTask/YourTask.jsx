/* eslint-disable no-unused-vars */


import useApi from "../../../Hooks/useApi";

const YourTask = () => {



  return <div>
     {/* <div className="relative flex flex-col w-full h-full overflow-y-hidden overflow-x-auto text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Job
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Status
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                 Deadline
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans antialiased font-normal leading-none text-blue-gray-900 opacity-70" />
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans antialiased font-normal leading-none text-blue-gray-900 opacity-70" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((task) => (
              <tr key={task._id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block  font-sans antialiased font-normal leading-normal text-blue-gray-900">
                    {task.name}
                  </p>
                  <span className="text-sm ">{task.email}</span>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <h3 className="block font-sans antialiased font-normal leading-normal text-blue-gray-900">
                    {task.title}
                  </h3>
                  <span className="text-sm">
                    {`${task.descriptions.slice(0, 20)} .....`}
                  </span>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans antialiased font-normal leading-normal text-blue-gray-900">
                    {task.status}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans antialiased font-normal leading-normal text-blue-gray-900">
                   {task.deadline}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                <button
                    
                    className="block font-sans antialiased text-sm  bg-green-600 px-2 rounded text-white "
                  >
                    Edit
                  </button>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button
                    
                    className="block font-sans antialiased text-sm  bg-red-600 px-2 rounded text-white "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div> */}
  </div>;
};

export default YourTask;
