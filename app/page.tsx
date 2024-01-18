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
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-1 rounded-full items-end mr-5 mb-1.5 ml-2 mt-1.5">
          Download App
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="WeChangeTheWayHowYouFindTrustAndPayForYourNewLandsWithAiTechnology w-[357px] h-[156px] text-center text-black text-[25px] font-semibold font-['Inter'] mt-10">
          We Change the Way <br />
          How You Find, Trust and Pay
          <br />
          For Your New Lands with <br />
          AI Technology{" "}
        </div>
        <div className="DoAllYourLandBuyingProcessFromASingleApp text-black text-xs font-extralight font-['Inter'] text-center mt-5">
          Do All Your Land Buying Process From a Single App
        </div>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full mt-7">
          Download App
        </button>
      </div>
    </>
  );
}
