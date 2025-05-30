import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import "./Product.css";
import Puma1 from "../assets/puma1.jpeg";
import Puma2 from "../assets/puma2.jpeg";
import Puma3 from "../assets/puma3.jpeg";
import Puma4 from "../assets/puma4.jpeg";
import Puma5 from "../assets/puma5.jpeg";
import Puma6 from "../assets/puma6.jpeg";
import Puma7 from "../assets/puma7.jpeg";
import Puma8 from "../assets/puma8.jpeg";
import Nike1 from "../assets/nike1.jpeg";
import Nike2 from "../assets/nike2.jpeg";
import Nike3 from "../assets/nike3.jpeg";
import Nike4 from "../assets/nike4.jpeg";
import Nike5 from "../assets/nike5.jpeg";
import Calibre1 from "../assets/calibre1.jpeg";
import Calibre2 from "../assets/calibre2.jpeg";
import Calibre3 from "../assets/calibre3.jpeg";
import Calibre4 from "../assets/calibre4.jpeg";

const productData = [
  {
    id: 1,
    Image: Puma1,
    ImageName: "PUMA SHOES",
    ProductDetail: "PUMA SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 2,
    Image: Puma2,
    ImageName: "PUMA SHOES",
    ProductDetail: "PUMA SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 3,
    Image: Puma3,
    ImageName: "PUMA SHOES",
    ProductDetail: "PUMA SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 4,
    Image: Puma4,
    ImageName: "PUMA SHOES",
    ProductDetail: "PUMA SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 5,
    Image: Puma5,
    ImageName: "PUMA SHOES",
    ProductDetail: "PUMA SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 6,
    Image: Puma6,
    ImageName: "PUMA SHOES",
    ProductDetail: "PUMA SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 7,
    Image: Puma7,
    ImageName: "NIKE SHOES",
    ProductDetail: "NIKE SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Puma",
  },
  {
    id: 8,
    Image: Puma8,
    ImageName: "NIKE SHOES",
    ProductDetail: "NIKE SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Puma",
  },
  {
    id: 9,
    Image: Nike2,
    ImageName: "NIKE SHOES",
    ProductDetail: "NIKE SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Nike",
  },
  {
    id: 10,
    Image: Nike3,
    ImageName: "NIKE SHOES",
    ProductDetail: "NIKE SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Nike",
  },
  {
    id: 11,
    Image: Nike4,
    ImageName: "NIKE SHOES",
    ProductDetail: "NIKE SHOES",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Nike",
  },
  {
    id: 12,
    Image: Calibre1,
    ImageName: "CALIBRE PRODUCTS",
    ProductDetail: "CALIBRE PRODUCTS",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Calibre",
  },
  {
    id: 13,
    Image: Calibre2,
    ImageName: "CALIBRE PRODUCTS",
    ProductDetail: "CALIBRE PRODUCTS",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Calibre",
  },
  {
    id: 14,
    Image: Calibre3,
    ImageName: "CALIBRE PRODUCTS",
    ProductDetail: "CALIBRE PRODUCTS",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Calibre",
  },
  {
    id: 15,
    Image: Calibre4,
    ImageName: "CALIBRE PRODUCTS",
    ProductDetail: "CALIBRE PRODUCTS",
    ProductPrice: "$100",
    PrevPrice: "$120",
    Discount: "30% OFF",
    category: "Calibre",
  },
];

const Product = () => {
  const [price, setPrice] = useState(0);

  const handleCartTotal = (productPrice) => {
    const numericPrice = Number(productPrice.replace("$", ""));
    setPrice((prev) => prev + numericPrice);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white p-5 pt-10">
      {/* Filter Buttons */}
      <div className="pt-10">
        <div className="w-full flex items-center justify-center bg-slate-500 rounded-2xl mb-8">
          <div className="buttons flex w-full justify-around p-5 text-xl font-bold">
            {["All", "Nike", "Puma", "Calibre"].map((category) => (
              <button
                key={category}
                className="bg-slate-800 hover:bg-white hover:text-black p-3 rounded-xl"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* making the subtotal and card area  */}

        <div className="flex items-center justify-center bg-slate-800 p-6 shadow-inner">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-3xl">
            {/* Total Price */}
            <div className="bg-gradient-to-r from-slate-400 to-slate-300 px-6 py-4 rounded-xl text-black shadow-md w-full sm:w-1/2 text-center transition transform hover:scale-105">
              <h1 className="text-2xl font-extrabold tracking-wide">
                💰 Total: <span className="text-green-700">${price}</span>
              </h1>
            </div>

            {/* My Cart Button */}
            <div className="">
              {/* <button className="text-xl font-bold tracking-wide">
                  🛒 My Cart
                </button> */}
              <Link
                to="/cart"
                className="bg-gradient-to-r from-blue-600 to-blue-400 px-30 py-4 rounded-xl text-white shadow-md w-full sm:w-1/2 text-center transition transform hover:scale-105 hover:shadow-lg"
              >
                🛒 My Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
          {filteredProducts.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              Image={item.Image}
              ImageName={item.ImageName}
              ProductDetail={item.ProductDetail}
              ProductPrice={item.ProductPrice}
              PrevPrice={item.PrevPrice}
              Discount={item.Discount}
              onAddToCart={handleCartTotal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
