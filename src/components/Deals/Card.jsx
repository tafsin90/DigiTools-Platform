import React, { use } from "react";
import portfolio from "/icons/portfolio.png";
import { FaCheck } from "react-icons/fa6";

function Card({ dataPromise }) {
  const datas = use(dataPromise);
  console.log(datas);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-full mx-auto">
      {datas.map((data, index) => {
        return (
          <div key={index} className="card w-1/2 bg-base-200 shadow-md">
            <div className="card-body relative space-y-2">
              <p className="badge badge-xs badge-warning absolute top-3 right-3">{data.tag}</p>
              <img src={portfolio} className="w-[25px]" />
              <h1 className="text-2xl font-bold">AI Writing pro</h1>
              <p className="text-slate-600 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, ratione aut nesciunt excepturi voluptatum eius.</p>
              <p className="text-slate-600 ">
                <span className="text-black text-2xl font-semibold">$29</span>/month
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <p>Unlimited AI generations</p>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <p>Unlimited AI generations</p>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <p>Unlimited AI generations</p>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full">Subscribe</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
