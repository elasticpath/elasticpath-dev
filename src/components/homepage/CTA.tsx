import React from "react";

export default function CTA() {
  return (
    <div className="p-12 md:p-24 text-center dark:bg-black/40 bg-[#A6EBCA]/20 backdrop-blur">
      <h2 className="font-manrope dark:text-white tracking-tight font-semibold text-[3rem]">
        Get started now!
      </h2>
      <button className="dark:!bg-[#1FEC90] !bg-black dark:shadow-[0px_0px_28px_0px_#1FEC90] py-2 px-4 dark:text-black text-white border-0 font-semibold bg-transparent !rounded-full transition-all duration-500">
        Start Free Trial
      </button>
    </div>
  );
}
