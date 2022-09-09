import { useRouter } from "next/router";
import Link from "next/link";
import { Alert, Dropdown } from "flowbite-react";
import React, { useContext } from "react";
import { UserContext } from "../Utils/AuthContext";

export default function Header() {
  const { push } = useRouter();
  const [state, dispatch] = useContext(UserContext);

  console.log(state.user);
  const handleLogOut = () => {
    dispatch({
      type: "AUTH_ERROR",
    });
    push("/Login");
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 shadow-lg rounded dark:bg-gray-900 sticky top-0 z-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-4 md:px-10">
        <Link href={"/"} className="flex items-center">
          <img
            src="https://dumbways.id/assets/images/brandred.png"
            className="mr-3 w-12 md:w-16"
            alt="Flowbite Logo"
          />
        </Link>
        <div className=" md:order-2 hidden md:flex">
          {state.user.__typename == "Login" ? (
            <>
              <Link href="/DashBordAdmin" className="cursor-pointer">
                <span className="bg-orange-500 px-6 py-2 rounded-full font-bold text-white">
                  Hai {state.user?.user?.firstName}
                </span>
              </Link>
              <span
                onClick={handleLogOut}
                className="text-orange-500 px-6 py-2 rounded-full font-bold cursor-pointer hover:text-orange-400"
              >
                Logout
              </span>
            </>
          ) : (
            <ul className="flex flex-col mt-4 rounded-3xl border border-gray-100 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/Login">
                  <button
                    type="button"
                    className="text-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-orange-500"
                  >
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:ml-1"
                >
                  Register
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
