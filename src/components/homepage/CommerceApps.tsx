import React from "react";

function AppButton({ children }) {
  return (
    <button className="bg-transparent border-0 rounded-full text-lg active:bg-[#1FEC90] active:text-black px-3">
      {children}
    </button>
  );
}

export default function CommerceApps() {
  return (
    <section className="px-4 py-44 text-center leading-tight tracking-tight">
      <div className="flex flex-col items-center justify-between dark:text-white/90">
        <h2 className="mb-4 text-[4rem] font-bold">Apps for commerce</h2>
        <div className="flex items-center justify-center gap-4">
          <AppButton>Products</AppButton>
          <AppButton>Payments</AppButton>
          <AppButton>Orders</AppButton>
          <AppButton>Subscriptions</AppButton>
          <AppButton>Studio</AppButton>
          <AppButton>Composer</AppButton>
          <AppButton>Extensions</AppButton>
        </div>
      </div>
    </section>
  );
}
