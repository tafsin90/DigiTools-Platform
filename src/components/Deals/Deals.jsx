import React, { Suspense, useState } from "react";
import { gradients } from "../../styles";
import Card from "./Card";
import Cart from "./Cart";

const fetchData = async () => {
  const res = await fetch("data.json");
  return res.json();
};

function Deals({ cartItems, setCartItems }) {
  const dataPromise = fetchData();
  const [chooseBtn, setChooseBtn] = useState(true);

  

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-3">
        Premium Digital Tools
      </h1>
      <p className="text-center text-gray-600 w-1/3 mx-auto">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="flex justify-center items-center gap-3 my-10">
        <button
          className={`${
            chooseBtn
              ? `px-4 py-2 ${gradients.primary} text-white font-bold rounded-full hover:cursor-pointer`
              : `px-4 py-2 font-bold rounded-full border border-indigo-500 hover:cursor-pointer`
          }`}
          onClick={() => setChooseBtn(true)}
        >
          Products
        </button>
        <button
          className={`${
            !chooseBtn
              ? `px-4 py-2 ${gradients.primary} text-white font-bold rounded-full hover:cursor-pointer`
              : `px-4 py-2 font-bold rounded-full border border-indigo-500 hover:cursor-pointer`
          }`}
          onClick={() => setChooseBtn(false)}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {chooseBtn ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-primary"></span>
          }
        >
          <Card
            dataPromise={dataPromise}
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></Card>
        </Suspense>
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>
      )}
    </div>
  );
}

export default Deals;
