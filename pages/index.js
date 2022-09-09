import React from "react";
import { gql, useQuery } from "@apollo/client";
import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import { Spinner } from "flowbite-react";
import CatClasses from "../components/CatClasses";
import Footer from "../components/Footer";

const user = gql`
  query User {
    users {
      id
      email
      firstName
    }
  }
`;

export default function index() {
  const { data, error, loading } = useQuery(user);
  if (error) return <div>error boss</div>;
  if (loading) return <Spinner aria-label="Default status example" />;
  console.log(data.users);
  return (
    <>
      <Header />
      <BannerHome />
      <CatClasses />
      <Footer />
    </>
  );
}
