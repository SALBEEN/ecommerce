import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <div className="nain-container bg-black min-h-screen text-white">
        <div className="content pt-20 mx-10">
          <h1 className="text-4xl p-4 font-extrabold underline">Cart Items</h1>

          {/* Sorting the card here */}
          <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <img
                    src={item.Image}
                    alt={item.ImageName}
                    className="w-full center h-55 object-cover rounded-md"
                  />
                  <h2 className="text-xl font-bold mt-2 text-orange-600">
                    {item.ImageName}
                  </h2>
                  <div className="flex justify-between pt-5 items-center">
                    <div>
                      <p className="text-green-600 text-lg font-semibold my-3">
                        {item.ProductPrice}
                      </p>
                      <p className="text-red-500 font-medium">
                        {item.Discount}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => removeFromCart(item.id)} // Ensure correct id is passed
                        className="bg-blue-500 p-3 rounded-xl mt-4 font-bold text-xl  hover:bg-black hover:text-white hover:font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 w-full">
                    <button className="bg-red-500 font-bold text-xl p-4 w-full rounded-xl hover:bg-black">
                      Shop Now
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
