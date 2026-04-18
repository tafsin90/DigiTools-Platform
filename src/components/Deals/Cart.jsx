import React from "react";
import portfolio from "/icons/portfolio.png";
function Cart({ cartItems, setCartItems }) {
  return (
    <div>
      <h1>Your cart</h1>

      <div className="px-20 space-y-6">
        {
            cartItems.map((cartItem)=>{
                return (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 flex justify-center items-center rounded-full bg-amber-300">
                        <img src={cartItem.icon} />
                      </div>
                      <div className="">
                        <h3>{cartItem.name}</h3>
                        <p>${cartItem.price}</p>
                      </div>
                    </div>
                    <button>remove</button>
                  </div>
                );
            })
        }
      </div>

      <div>
        <p>Total:</p>
        <p>$100</p>
      </div>
      <button className="btn btn-primary btn-block">Proceed to checkout</button>
    </div>
  );
}

export default Cart;
