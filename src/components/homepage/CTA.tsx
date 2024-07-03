import React from "react";

export default function CTA() {
  return (
    <div className="p-12 md:p-24 text-center dark:bg-black/40 bg-[#A6EBCA]/20 backdrop-blur">
      <h2 className="font-manrope dark:text-white tracking-tight font-semibold text-[3rem]">
        Get started now!
      </h2>
      <a href="https://useast.cm.elasticpath.com/free-trial" className="dark:!bg-[#1FEC90] !bg-black dark:shadow-[0px_0px_28px_0px_#1FEC90] text-lg py-1.5 px-6 dark:text-black text-white border-0 font-semibold bg-transparent !rounded-full transition-all duration-500 hover:!bg-[#61DEA6] hover:dark:!bg-transparent hover:dark:!text-white hover:dark:ring-2 hover:dark:ring-[#1FEC90] hover:!text-black hover:!no-underline">
        Start Free Trial
      </a>
    </div>
  );
}
