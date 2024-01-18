import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div>
        {/* Navigation Section */}
        <Image
          src="/images/zland_logo.png"
          width={50}
          height={50}
          alt="Picture of the author"
          className="mt-5 ml-5"
        />
      </div>
    </>
  );
}
