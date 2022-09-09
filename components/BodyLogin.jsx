import React, { useState, useContext } from "react";
import { Label, TextInput, Button, Checkbox } from "flowbite-react";
import Link from "next/link";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { UserContext } from "../Utils/AuthContext";

const login = gql`
  mutation Login($email: EmailAddress!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        firstName
        id
        email
        role
      }
      token
    }
  }
`;

export default function BodyLogin() {
  const { push } = useRouter();

  const [state, dispatch] = useContext(UserContext);
  const [formLog, setFormLog] = useState({
    email: "",
    password: "",
  });
  console.log(formLog);

  const { email, password } = formLog;
  const handleChangeLog = (e) => {
    setFormLog({
      ...formLog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();

      // Data body

      const response = await submitLogin({
        variables: {
          email: formLog.email,
          password: formLog.password,
        },
      });
      console.log("response -- ", response);

      if (response?.data?.login.__typename == "Login") {
        if (response?.data?.login?.user?.role == "AUTHENTICATED") {
          dispatch({
            type: "LOGIN_TEACHER",
            payload: response?.data?.login,
          });
          push("/DashbordAdmin");
        } else {
          push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [submitLogin] = useMutation(login);

  return (
    <div className="md:w-1/4 w-screen m-auto mt-8 ">
      <form
        onSubmit={(e) => handleSubmitLogin(e)}
        className="flex flex-col gap-4 w-auto bg-white m-auto px-10 py-7  rounded-lg shadow-xl"
      >
        <h1 className="font-bold text-3xl text-orange-500">LOGIN</h1>
        <div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Your Email/Username"
            onChange={handleChangeLog}
            value={email}
            required={true}
          />
        </div>
        <div>
          <TextInput
            id="password"
            name="password"
            placeholder="Your Password"
            onChange={handleChangeLog}
            value={password}
            type="password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <p>
            Dont Have an Account? Register <Link href="/Register">Here</Link>{" "}
          </p>
        </div>
        <div className="m-auto">
          <Button type="submit" color="light">
            LOGIN
          </Button>
        </div>
        <hr />
        <button
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
            ></path>
          </svg>
          Sign in with Facebook
        </button>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
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
            ></path>
          </svg>
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
