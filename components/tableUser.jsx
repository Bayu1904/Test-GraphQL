import React from "react";
import Link from "next/link";

export default function TableUser({ datas }) {
  console.log(datas);
  return (
    <div className="overflow-x-auto sm:rounded-lg -z-10 w-3/4 m-auto mt-14">
      <Link href="/DashbordAdmin">
        <h1 className="font-bold text-orange-600 mb-8 text-xl cursor-pointer">
          {" "}
          {"< "}Back to Dashboard
        </h1>
      </Link>
      <h1 className="font-bold text-orange-600 mb-8 text-4xl">DATAS STUDENT</h1>
      {datas?.class?.students.length == 0 ? (
        <>
          <div className="m-auto font-bold text-3xl text-center mb-6">
            NO DATAS
          </div>
          <img
            src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-7416.jpg?w=740&t=st=1662709872~exp=1662710472~hmac=62489b01d7ec3f5c6b090a818cbd3896bf1fb2fcb3219e5c2a1fa6feb6e1cdca"
            alt=""
            className="m-auto w-96"
          />
        </>
      ) : (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Student
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                ROLE
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {datas?.class?.students?.map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.firstName}
                </th>
                <td className="py-4 px-6">{data.email}</td>
                <td className="py-4 px-6">{data.role}</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
