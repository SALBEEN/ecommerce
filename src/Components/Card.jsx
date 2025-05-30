import React from "react";
import { useState } from "react";
import { useCart } from "./CartContext";

const Card = ({
  Image,
  ImageName,
  ProductDetail,
  ProductPrice,
  PrevPrice,
  Discount,
  onAddToCart,
  id,
}) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src={Image}
        alt={ImageName}
        className="w-full h-64 object-cover object-center"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Product Name */}
        <h3 className="text-lg font-bold">{ImageName}</h3>

        {/* Product Detail */}
        <p className="text-sm text-gray-600">{ProductDetail}</p>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-green-600">
            {ProductPrice}
          </span>
          <div className="text-sm text-gray-500 line-through">{PrevPrice}</div>
        </div>

        {/* Discount */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-red-600 ">{Discount}</div>
          <div className="">
            <button
              onClick={() => {
                onAddToCart(ProductPrice);
                addToCart({ id, ImageName, Image, ProductPrice, Discount });
              }}
              className="bg-blue-500 text-white font-bold p-4 rounded-xl  hover:bg-black hover:text-white hover:font-bold "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
