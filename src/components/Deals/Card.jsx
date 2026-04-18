import React, { use } from "react";
import { FaCheck } from "react-icons/fa6";
import { badgeColor, gradients } from "../../styles";

function Card({ dataPromise, cartItems, setCartItems }) {
  const datas = use(dataPromise);

const handleSubscribe = (data) => {
  setCartItems([...cartItems, data]);
  
};

  // bg-orange-200 text-orange-800
  // bg-indigo-200 text-indigo-800
  // bg-green-200 text-green-800

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
      {datas.map((data, index) => {
        return (
          <div key={index} className="card max-w-96 bg-base-200 shadow-md ">
            <div className="card-body relative space-y-2">
              <p className={`absolute top-4 right-4 rounded-full px-3 py-1 text-[14px] ${badgeColor[data.tagType]}`}>{data.tag}</p>
              <img src={data.icon} className="w-[20px] mt-5" />
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <p className="text-slate-600 ">{data.description}</p>
              <p className="text-slate-600 ">
                <span className="text-black text-2xl font-semibold">${data.price}</span>/{data.period}
              </p>
              <ul className="space-y-2">
                {data.features.map((feature, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <FaCheck className="text-green-500" />
                      <p>{feature}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 mb-4">
                <button className={`btn ${gradients.primary} text-white btn-block rounded-full`} onClick={() => handleSubscribe(data)}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
