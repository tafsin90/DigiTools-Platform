import React from "react";
import { gradients } from "../../styles";
import { toast } from "react-toastify";

function Cart({ cartItems, setCartItems }) {
  const handleRemove = (cartItem) => {
    const filteredItems = cartItems.filter((thisItem) => {
      return thisItem.name !== cartItem.name;
    });
    setCartItems(filteredItems);
    toast.warn("Removed from cart");
  };

  const price = cartItems.reduce((sum, item) => {
    return (sum += item.price);
  }, 0);

  return (
    <div className="w-11/13 mx-auto rounded-lg border border-gray-300 py-5 mb-5">
      <h1 className="px-17 py-5 font-semibold text-2xl">Your cart</h1>

      <div className="px-20 space-y-6">
        {cartItems.map((cartItem) => {
          return (
            <div className="flex items-center justify-between bg-base-300 px-3 py-2 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 flex justify-center items-center rounded-full bg-base-200">
                  <img src={cartItem.icon} />
                </div>
                <div className="">
                  <h3 className="font-semibold">{cartItem.name}</h3>
                  <p className="text-slate-600">{cartItem.price}</p>
                </div>
              </div>
              <button
                className="text-red-600 btn btn-outline"
                onClick={() => handleRemove(cartItem)}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center px-17 py-5">
        <p className="text-slate-700">Total:</p>
        <p className="font-semibold text-xl">${price}</p>
      </div>
      <div className="px-17 flex justify-center">
        <button
          className={`btn ${gradients.primary} btn-block rounded-full py-6 text-lg text-white`}
          onClick={() => {
            setCartItems([]);
            {cartItems.length > 0
              ? toast.success("You bought everything, JOMIDAR!!")
              : toast.success("Select something, gorib!!");};
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
