import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="mt-5 flex flex-col items-center">
        {/* Navigation Section */}
        <Image
          src="/images/zland_logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
          className="ml-5"
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="WeChangeTheWayHowYouFindTrustAndPayForYourNewLandsWithAiTechnology w-[357px] h-[156px] text-center text-black text-[25px] font-semibold font-['Inter'] mt-8">
          We Change the Way <br />
          How You Find, Trust and Pay
          <br />
          For Your New Lands with <br />
          AI Technology{" "}
        </div>
        <div className="DoAllYourLandBuyingProcessFromASingleApp text-black text-xs font-extralight font-['Inter'] text-center mt-5">
          Do All Your Land Buying Process From a Single App
        </div>
        <Link
          href="https://play.google.com/store/apps/details?id=com.ambalooms.Zland&hl=en&gl=US"
          passHref={true}
        >
          <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full mt-7 flex">
            <text>Download App</text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="bg-gray-300 mt-10">
        <div className="m-10">
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/g15_XQrrZgw?si=vYvmyIrzwIVTzUnS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
}
