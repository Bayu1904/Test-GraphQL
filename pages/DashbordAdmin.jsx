import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Spinner, Button, Modal } from "flowbite-react";
import Select from "react-select";
import AddBatch from "../components/Modal/addBatch";
import SelectClass from "../components/Modal/selectClass";
import { useRouter } from "next/router";

const batch = gql`
  query Batches {
    batches {
      id
      name
    }
  }
`;
const Getbatch = gql`
  query batch($id: String!) {
    batch(id: $id) {
      id
      name
    }
  }
`;

const Delete = gql`
  mutation Batch($id: String!) {
    deleteBatch(id: $id) {
      name
      id
    }
  }
`;

export default function DashbordAdmin() {
  const { push } = useRouter;
  const [deleteBatch] = useMutation(Delete);

  const [modal, setModal] = useState(false);
  const [modalClass, setModalClass] = useState(false);
  const { data, error, loading } = useQuery(batch);
  const [userSelect, setUserSelect] = useState(null);
  const [batchID, setBatchID] = useState(null);

  const { data: setbatch } = useQuery(Getbatch, {
    variables: {
      id: userSelect,
    },
  });
  console.log(setbatch);

  if (error) return <div>error Mas datanya</div>;
  if (loading) return <Spinner aria-label="Default status example" />;
  console.log(data);

  const result = data.batches.map((data) => {
    return {
      label: data.name,
      value: data.id,
    };
  });

  console.log(result);

  // console.log(setbatch.batch);
  const handleInputChange = (label) => {
    setUserSelect(label);
  };

  // modal for addBatch
  const onClick = () => {
    return setModal(true);
  };
  const onClickodd = () => {
    return setModal(false);
  };

  // modal for
  const handleClass = (id) => (setModalClass(true), setBatchID(id));
  const handleClassoff = () => {
    return setModalClass(false);
  };

  const handleDelete = async (id) => {
    let person = prompt("Input 'DELETE' for Delete Product", "DELETE");
    if (person == "DELETE") {
      await deleteBatch({
        variables: {
          id: id,
        },
      });
    }
  };

  console.log(modalClass, batchID);

  return (
    <>
      <Header />
      {modalClass && <SelectClass data={batchID} button={handleClassoff} />}
      {modal && (
        <div>
          <AddBatch click={onClickodd} />
        </div>
      )}
      <div className="text-center mt-9">
        <div className=" flex gap-9 justify-center">
          <div className="w-80">
            <Select
              options={result.sort((a, b) => a.value.localeCompare(b.value))}
              onChange={(e) => handleInputChange(e.value)}
            ></Select>
          </div>
          <div className="w-64">
            <div
              className="bg-slate-300 border-dashed border-2 border-indigo-600 w-auto text-center py-1 rounded-md hover:bg-slate-600 hover:text-white hover:border-white cursor-pointer"
              onClick={onClick}
            >
              + Add Batches
            </div>
          </div>
        </div>
      </div>
      {userSelect != null ? (
        <div className="container m-auto mt-20 flex flex-auto flex-wrap gap-4 justify-around ">
          <a className="block p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
            <div
              className="cursor-pointer rounded-full bg-orange-500 text-white inline px-2 absolute -top-2 -right-2"
              onClick={(e) => handleDelete(setbatch?.batch?.id)}
            >
              X
            </div>
            <div
              className="cursor-pointer"
              onClick={(e) => handleClass(setbatch?.batch?.id)}
            >
              <img
                src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1662530874~exp=1662531474~hmac=c28779cd2307d1727f69e392108e26b9c69b2fdc3bf79a24ed5000845cdb16b9"
                alt=""
              />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {setbatch?.batch?.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Fullstack Developer
            </p>
          </a>
        </div>
      ) : (
        <div className="container m-auto mt-20 flex flex-auto flex-wrap gap-4 justify-around ">
          {data?.batches?.map((item, i) => (
            <a className="block p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
              <div
                className="cursor-pointer rounded-full bg-orange-500 text-white inline px-2 absolute -top-2 -right-2"
                onClick={(e) => handleDelete(item?.id)}
              >
                X
              </div>
              <div
                className="cursor-pointer"
                onClick={(e) => handleClass(item.id)}
              >
                <img
                  src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1662530874~exp=1662531474~hmac=c28779cd2307d1727f69e392108e26b9c69b2fdc3bf79a24ed5000845cdb16b9"
                  alt=""
                />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Fullstack Developer
              </p>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
