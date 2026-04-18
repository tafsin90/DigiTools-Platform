import React from "react";
import user from "../assets/user.png";
import packagee from "../assets/package.png";
import rocket from "../assets/rocket.png";
import { gradients } from "../styles";

function Steps() {
  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold mb-4">Get Started in 3 Steps</h1>
      <p className="text-center text-slate-600 mb-4">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto ">
        <div className="card max-w-96 bg-base-200 shadow-md py-6 px-4">
          <div className="card-body  relative flex flex-col justify-center items-center text-center space-y-3">
            <p
              className={`absolute top-4 right-6 rounded-full  w-8 h-8 flex items-center justify-center ${gradients.primary} text-white font-semibold`}
            >
              01
            </p>
            <div className="mt-8 h-22 w-22 bg-purple-100 flex justify-center items-center rounded-full">
              <img src={user} className="w-10" />
            </div>
            <h1 className="font-semibold text-xl">Create Account</h1>
            <p className="text-slate-600">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="card max-w-96 bg-base-200 shadow-md py-6 px-4">
          <div className="card-body  relative flex flex-col justify-center items-center text-center space-y-3">
            <p
              className={`absolute top-4 right-6 rounded-full  w-8 h-8 flex items-center justify-center ${gradients.primary} text-white font-semibold`}
            >
              02
            </p>
            <div className="mt-8 h-22 w-22 bg-purple-100 flex justify-center items-center rounded-full">
              <img src={packagee} className="w-10" />
            </div>
            <h1 className="font-semibold text-xl">Chose Products</h1>
            <p className="text-slate-600">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="card max-w-96 bg-base-200 shadow-md py-6 px-4">
          <div className="card-body  relative flex flex-col justify-center items-center text-center space-y-3">
            <p
              className={`absolute top-4 right-6 rounded-full  w-8 h-8 flex items-center justify-center ${gradients.primary} text-white font-semibold`}
            >
              03
            </p>
            <div className="mt-8 h-22 w-22 bg-purple-100 flex justify-center items-center rounded-full">
              <img src={rocket} className="w-10" />
            </div>
            <h1 className="font-semibold text-xl">Start Creating</h1>
            <p className="text-slate-600">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
