import React from "react";

export default function CatClasses() {
  return (
    <div className="container -mt-9">
      <div className="xl:text-2xl md:text-lg uppercase font-bold mb-12 text-center">
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
        <p className="inline xl:mx-14 mx-5 uppercase">Our Bootcamp Program</p>
        <hr className="border-1 w-20 border-slate-400 inline-block mb-2" />
      </div>
      <div>
        <div className="w-3/4 m-auto grid md:grid-cols-2 grid-cols-1 gap-3 h-conten mb-3">
          <div className="w-full md:h-conten h-96 overflow-hidden text-center">
            <h1 className="m-auto px-8 py-2 inline-block align-middle font-bold text-white bg-orange-500">
              Fullstack Classes
            </h1>
            <img
              src="https://img.freepik.com/free-vector/organic-flat-computer-programming-illustration_23-2148955256.jpg?w=996&t=st=1662510913~exp=1662511513~hmac=680e018e30b162e0e7f49efb31622a6a27760eb9df6ef5cc13085d8151d71495"
              alt=""
              className="object-contain hover:scale-110 ease-linear duration-300 inline mt-7"
            />
          </div>
          <div className="w-full md:h-conten h-96 overflow-hidden text-center">
            <h1 className="m-auto px-8 py-2 inline-block align-middle font-bold text-white bg-orange-500">
              DevOps Classes
            </h1>
            <img
              src="https://img.freepik.com/free-vector/organic-flat-computer-programming-illustration_23-2148955256.jpg?w=996&t=st=1662510913~exp=1662511513~hmac=680e018e30b162e0e7f49efb31622a6a27760eb9df6ef5cc13085d8151d71495"
              alt=""
              className="object-contain hover:scale-110 ease-linear duration-300 inline mt-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
