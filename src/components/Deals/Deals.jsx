import React from "react";
import { gradients } from "../../styles";
import Card from "./Card";

function Deals() {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-3">Premium Digital Tools</h1>
      <p className="text-center text-gray-600 w-1/3 mx-auto">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

      <div className="flex justify-center items-center gap-3 my-10">
        <button className={`px-4 py-2 ${gradients.primary} text-white font-bold rounded-full hover:cursor-pointer`}>Products</button>
        <button className="px-4 py-2 font-bold rounded-full border border-indigo-500 hover:cursor-pointer">Cart (0)</button>
      </div>
      <Card></Card>
    </div>
  );
}

export default Deals;
