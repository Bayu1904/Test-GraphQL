import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";

const createBatch = gql`
  mutation Batch($name: String!, $create: DateTime, $end: DateTime) {
    createBatch(input: { name: $name, startedAt: $create, endedAt: $end }) {
      name
    }
  }
`;

export default function AddBatch({ click }) {
  const { push } = useRouter;
  const [batchAdd, setBatchAdd] = useState({
    name: "",
    startAt: "",
    endedAt: "",
  });

  const { name, startAt, endedAt } = batchAdd;
  const handleChangeLog = (e) => {
    setBatchAdd({
      ...batchAdd,
      [e.target.name]: e.target.value,
    });
  };
  console.log(batchAdd);
  const [submitBatch] = useMutation(createBatch);
  return (
    <>
      <div className="w-screen h-screen bg-slate-500 opacity-50 fixed z-10"></div>
      <div className="bg-white w-96 rounded-lg px-4 py-8 shadow-lg fixed -mt-36 -mr-36 right-1/2 top-1/2 z-20">
        <div
          className="cursor-pointer rounded-full bg-orange-500 text-white inline px-2 absolute -top-2 -right-2"
          onClick={() => {
            click();
          }}
        >
          X
        </div>
        <div className="text-center text-2xl font-bold mb-3 text-orange-500">
          ADD BATCH
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await submitBatch({
              variables: {
                name: name,
                create: startAt,
                end: endedAt,
              },
            });
            alert(`Berhasil Menambahkan Batch ${response.createBatch?.name}`);
            push("/DashbordAdmin");
            console.log(response);
          }}
        >
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Batch name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChangeLog}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="exam: Batch 37"
              required
            />
          </div>
          <div className="flex gap-4">
            <div class="mb-6 w-1/2">
              <label
                for="date"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Start Batch
              </label>
              <input
                type="date"
                id="date"
                name="startAt"
                onChange={handleChangeLog}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="exam: Batch 37"
                required
              />
            </div>
            <div class="mb-6 w-1/2">
              <label
                for="date"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                End Batch
              </label>
              <input
                type="date"
                id="date"
                name="endedAt"
                onChange={handleChangeLog}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="exam: Batch 37"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
