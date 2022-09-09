import { useRouter } from "next/router";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Header from "../../components/Header";
import TableUser from "../../components/tableUser";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { IoMdCodeWorking } from "react-icons/io";
import { MdAssignmentInd, MdCreditScore } from "react-icons/md";

const getClass = gql`
  query Class($id: String!) {
    class(id: $id) {
      id
      type
      batch {
        id
        name
      }
      students {
        firstName
        email
        role
      }
    }
  }
`;
export default function WB() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const id = router.query.class;
  const { data: setClass } = useQuery(getClass, {
    variables: {
      id: id,
    },
  });

  const menuOn = () => {
    setMenu(!menu);
  };
  console.log(setClass?.class);
  return (
    <div>
      <Header />
      <div
        className={
          menu
            ? "w-80 h-screen bg-orange-500 shadow-xl fixed right-0 transition-all duration-300  py-4 pr-5 pl-6"
            : "w-96 h-screen bg-orange-500 shadow-xl fixed -right-80 transition-all duration-300  py-2 pr-5 pl-6"
        }
      >
        <span
          className="pr-16 pl-4 py-10 rounded-full bg-orange-500 text-white font-bold absolute -left-12 cursor-pointer"
          onClick={menuOn}
        >
          MENUS
        </span>
        <div className="font-bold text-3xl text-white text-right mb-2">
          {setClass?.class?.batch?.name}
        </div>
        <div className="font-semibold text-xl text-white text-right">
          {setClass?.class?.type}
        </div>
        <div className="MENUS ">
          <div className="mt-24 flex text-3xl font-bold text-white hover:underline rounded-xl cursor-pointer">
            <AiOutlineCheckSquare className="w-7 mr-12" />
            <span>Attandance</span>
          </div>
          <div className="mt-9 flex text-3xl font-bold text-white hover:underline cursor-pointer">
            <IoMdCodeWorking className="w-7 mr-12" />
            <span>Productivities</span>
          </div>
          <div className="mt-9 flex text-3xl font-bold text-white hover:underline cursor-pointer">
            <MdAssignmentInd className="w-7 mr-12" />
            <span>Assignments</span>
          </div>
          <div className="mt-9 flex text-3xl font-bold text-white hover:underline cursor-pointer">
            <MdCreditScore className="w-7 mr-12" />
            <span>Score</span>
          </div>
        </div>
      </div>
      <TableUser datas={setClass} />
    </div>
  );
}
