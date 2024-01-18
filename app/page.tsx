import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="mt-5 grid grid-cols-2">
        {/* Navigation Section */}
        <Image
          src="/images/zland_logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
          className="ml-5"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded-full items-end mr-5 mb-1.5 ml-2 mt-1.5">
          Download App
        </button>
      </div>
    </>
  );
}
