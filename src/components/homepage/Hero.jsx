import React from "react";
import sunn from "../../assets/group-5.png";
import play from "../../assets/Play.png";
import banner from "../../assets/banner.png";
import { gradients } from "../../styles";

function Hero() {
  return (
    <>
      <div className="flex items-center gap-15 px-[10%] my-20">
        <div className=" space-y-5">
          <div className="bg-indigo-100 flex items-center gap-1 w-fit px-4 py-2 rounded-full">
            <img className="h-full" src={sunn} />
            <p className={`${gradients.primary} bg-clip-text text-transparent `}>New: AI-Powered Tools Available</p>
          </div>

          <div className="">
            <h1 className="text-7xl font-bold mb-4">Supercharge Your Digital Workflow</h1>
            <p className="text-slate-500 w-[80%] text-lg">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button className={`rounded-full ${gradients.primary} px-4 py-3 text-white font-bold hover:cursor-pointer`}>Explore Products</button>
            <button className="flex items-center gap-2 rounded-full px-4 py-3 border border-indigo-600 hover:cursor-pointer">
              <img src={play} />
              <p>Watch Demo</p>
            </button>
          </div>
        </div>

        <img src={banner} />
      </div>

      <div className={`${gradients.primary} py-10 flex justify-center space-x-15 text-center items-center mb-25`}>
        <div>
          <h1 className="text-white font-bold text-6xl">50K+</h1>
          <p className="text-xl text-gray-300">Active Users</p>
        </div>
        <div className="w-px h-20 bg-gray-400"></div>
        <div>
          <h1 className="text-white font-bold text-6xl">50K+</h1>
          <p className="text-xl text-gray-300">Active Users</p>
        </div>
        <div className="w-px h-20 bg-gray-400"></div>
        <div>
          <h1 className="text-white font-bold text-6xl">50K+</h1>
          <p className="text-xl text-gray-300">Active Users</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
