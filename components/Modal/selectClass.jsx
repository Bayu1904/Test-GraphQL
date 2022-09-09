import React from "react";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const classFind = gql`
  query Class($batch: String!) {
    classes(where: { batchId: $batch }) {
      id
      type
    }
  }
`;

export default function SelectClass({ data, button }) {
  const { data: setClass } = useQuery(classFind, {
    variables: {
      batch: data,
    },
  });
  console.log(setClass?.classes);
  return (
    <>
      <div className="w-screen h-screen bg-slate-700 opacity-50 fixed z-10"></div>
      <div className="bg-white w-96 rounded-lg px-4 py-8 shadow-lg fixed -mt-20 -mr-36 right-1/2 top-1/2 z-20">
        <div
          className="cursor-pointer rounded-full bg-orange-500 text-white inline px-2 absolute -top-2 -right-2"
          onClick={() => {
            button();
          }}
        >
          X
        </div>
        <div className="text-center text-2xl font-bold mb-3 text-orange-500">
          SELECT CLASS STAGE
        </div>
        <div className="mt-9 flex flex-wrap gap-4 justify-around">
          {setClass?.classes?.length != 0 ? (
            <>
              {setClass?.classes?.map((data) => (
                <Link href={`admin/${data.id}`} className="cursor-pointer">
                  <a className="px-9 rounded-lg py-1 bg-orange-400 text-white cursor-pointer">
                    {data.type}
                  </a>
                </Link>
              ))}
            </>
          ) : (
            <div className="m-auto text-center">
              Belum Ada Kelas, Tambahkan Kelas terlebih dahulu
            </div>
          )}
        </div>
        <div className="w-44 m-auto mt-6">
          <div className="bg-orange-300 border-dashed border-2 border-indigo-600 w-auto text-center py-1 rounded-md hover:bg-slate-600 hover:text-white hover:border-white cursor-pointer">
            + Add Classes
          </div>
        </div>
      </div>
    </>
  );
}
