import React from "react";
import { FaCheck } from "react-icons/fa6";
import { gradients } from "../styles";

function Pricing() {
  return (
    <div className="my-20 px-4">
      <h1 className="text-center text-5xl font-bold mb-4">
        Simple Pricing for Everyone
      </h1>
      <p className="text-center text-slate-600 mb-12">
        Choose the plan that fits your growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">
        <div className="card w-full bg-base-200 shadow-md py-6 px-4 h-full">
          <div className="card-body flex flex-col h-full space-y-3">
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">Starter</h1>
                <p className="text-slate-600 text-base">
                  Perfect for getting started
                </p>
              </div>
              <p className="text-slate-600">
                <span className="text-black font-bold text-3xl">$0</span> /Month
              </p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
              </ul>
            </div>
            <button
              className={`${gradients.primary} btn btn-block text-white text-lg rounded-full mt-8`}
            >
              Get Started Free
            </button>
          </div>
        </div>

        <div
          className={`card w-full bg-base-200 shadow-md py-6 px-4 h-full ${gradients.primary}`}
        >
          <div className="card-body flex flex-col h-full space-y-3">
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl text-white">Pro</h1>
                <p className="text-base text-white">
                  Best for Professionals
                </p>
              </div>
              <p className="text-white">
                <span className="font-bold text-3xl text-white">
                  $29
                </span>
                /Month
              </p>
              <ul className="space-y-1 ">
                <li className="flex items-center gap-2  ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 ">
                  <FaCheck className="text-white" />
                  <p className="text-white">Access to 10 free tools</p>
                </li>
              </ul>
            </div>
            <button className="btn btn-block text-lg rounded-full mt-8  text-indigo-600">
              Get Started Free
            </button>
          </div>
        </div>

        <div className="card w-full bg-base-200 shadow-md py-6 px-4 h-full">
          <div className="card-body flex flex-col h-full space-y-3">
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <h1 className="font-semibold text-2xl">Starter</h1>
                <p className="text-slate-600 text-base">
                  Perfect for getting started
                </p>
              </div>
              <p className="text-slate-600">
                <span className="text-black font-bold text-3xl">$0</span> /Month
              </p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <FaCheck className="text-green-500" />
                  <p>Access to 10 free tools</p>
                </li>
              </ul>
            </div>
            <button
              className={`${gradients.primary} btn btn-block text-white text-lg rounded-full mt-8`}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
