import React from "react";

function page() {
  return (
    <div className="">
      <section className="lg:h-screen bg-blurblue bg-contain px-12 lg:px-20 flex  justify-between">
        <div className="flex flex-col justify-between h-screen py-16">
          <img className="w-64 h-16 object-contain" src="/logo/logo.png"/>
          <h1 className="text-center lg:text-left font-extrabold text-[39px] leading-[45px] lg:text-[85px] mt-10 lg:leading-[80px]">
            <span className="text-primary">MedCure</span> <br /> Your AI Powered <br />
            Medical <br /> Companion
          </h1>
          <div className="flex gap-2 font-semibold justify-center lg:justify-start mt-8">
            {/* <a href="">
              <button className="hover:bg-light lg:text-lg rounded-lg text-white px-3 py-2 bg-primary border-primary">
                Get Started
              </button>
            </a>
            <a href="">
              <button className="hover:text-light border border-primary hover:border-light lg:text-lg rounded-lg text-primary px-3 py-2">
                Read Docs
              </button>
            </a> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/img/steth.png"
            alt=""
            className="hidden lg:block object-contain lg:w-[500px] lg:h-[500px] mr-10" />
        </div>
      </section>
    </div>
  );
}

export default page;
