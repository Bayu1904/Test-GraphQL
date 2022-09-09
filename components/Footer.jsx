import React from "react";

export default function Footer() {
  return (
    <div className=" w-5/6 grid xl:grid-cols-3 grid-cols-1 gap-3 m-auto h-24 md:mt-36 mt-10">
      <div>
        <img
          src="https://dumbways.id/assets/images/brandred.png"
          alt=""
          className="w-24 m-auto md:m-0"
        />
      </div>
      <div className=" grid grid-rows-2 text-center">
        <div className="mb-0 h-4">
          <span>Our Location</span>
          <span className="mx-10">Galeri</span>
          <span>Our Partner</span>
        </div>
        <div className="font-thin text-gray-600">
          Copyright 2020 &copy; PT Dumbways Indonesia
        </div>
      </div>
      {/* <div className="flex justify-evenly bg-gray-200 w-full">
        <BsFacebook fontSize="1.5em" />
        <BsInstagram fontSize="1.5em" />
        <BsTwitter fontSize="1.5em" />
        <BsYoutube fontSize="1.5em" />
      </div> */}
    </div>
  );
}
