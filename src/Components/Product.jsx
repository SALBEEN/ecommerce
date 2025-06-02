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
    ImageName: "Puma Running Shoes",
    ProductDetail: "Lightweight and durable running shoes for everyday use.",
    ProductPrice: "$80",
    PrevPrice: "$100",
    Discount: "20% OFF",
    category: "Puma",
  },
  {
    id: 2,
    Image: Puma2,
    ImageName: "Puma Sports Sneakers",
    ProductDetail: "Stylish sneakers designed for sports and casual wear.",
    ProductPrice: "$90",
    PrevPrice: "$120",
    Discount: "25% OFF",
    category: "Puma",
  },
  {
    id: 3,
    Image: Puma3,
    ImageName: "Puma Training Shoes",
    ProductDetail: "Perfect for gym and training sessions.",
    ProductPrice: "$85",
    PrevPrice: "$110",
    Discount: "23% OFF",
    category: "Puma",
  },
  {
    id: 4,
    Image: Puma4,
    ImageName: "Puma Casual Shoes",
    ProductDetail: "Comfortable and trendy casual shoes.",
    ProductPrice: "$75",
    PrevPrice: "$95",
    Discount: "21% OFF",
    category: "Puma",
  },
  {
    id: 5,
    Image: Puma5,
    ImageName: "Puma High-Top Sneakers",
    ProductDetail: "High-top sneakers for a bold and stylish look.",
    ProductPrice: "$100",
    PrevPrice: "$130",
    Discount: "23% OFF",
    category: "Puma",
  },
  {
    id: 6,
    Image: Puma6,
    ImageName: "Puma Slip-On Shoes",
    ProductDetail: "Easy-to-wear slip-on shoes for everyday comfort.",
    ProductPrice: "$70",
    PrevPrice: "$90",
    Discount: "22% OFF",
    category: "Puma",
  },
  {
    id: 7,
    Image: Puma7,
    ImageName: "Nike Air Max",
    ProductDetail: "Iconic Nike Air Max with superior cushioning.",
    ProductPrice: "$150",
    PrevPrice: "$200",
    Discount: "25% OFF",
    category: "Nike",
  },
  {
    id: 8,
    Image: Puma8,
    ImageName: "Nike Revolution 5",
    ProductDetail: "Lightweight running shoes with soft foam cushioning.",
    ProductPrice: "$120",
    PrevPrice: "$160",
    Discount: "25% OFF",
    category: "Nike",
  },
  {
    id: 9,
    Image: Nike2,
    ImageName: "Nike ZoomX Vaporfly",
    ProductDetail: "High-performance running shoes for athletes.",
    ProductPrice: "$250",
    PrevPrice: "$300",
    Discount: "17% OFF",
    category: "Nike",
  },
  {
    id: 10,
    Image: Nike3,
    ImageName: "Nike Pegasus Trail",
    ProductDetail: "Trail running shoes with excellent grip and comfort.",
    ProductPrice: "$140",
    PrevPrice: "$180",
    Discount: "22% OFF",
    category: "Nike",
  },
  {
    id: 11,
    Image: Nike4,
    ImageName: "Nike Free RN",
    ProductDetail: "Flexible and lightweight shoes for natural movement.",
    ProductPrice: "$110",
    PrevPrice: "$140",
    Discount: "21% OFF",
    category: "Nike",
  },
  {
    id: 12,
    Image: Calibre1,
    ImageName: "Calibre Leather Boots",
    ProductDetail: "Premium leather boots for a rugged and stylish look.",
    ProductPrice: "$180",
    PrevPrice: "$220",
    Discount: "18% OFF",
    category: "Calibre",
  },
  {
    id: 13,
    Image: Calibre2,
    ImageName: "Calibre Hiking Shoes",
    ProductDetail: "Durable hiking shoes with excellent grip and support.",
    ProductPrice: "$160",
    PrevPrice: "$200",
    Discount: "20% OFF",
    category: "Calibre",
  },
  {
    id: 14,
    Image: Calibre3,
    ImageName: "Calibre Formal Shoes",
    ProductDetail: "Elegant formal shoes for office and special occasions.",
    ProductPrice: "$130",
    PrevPrice: "$170",
    Discount: "24% OFF",
    category: "Calibre",
  },
  {
    id: 15,
    Image: Calibre4,
    ImageName: "Calibre Casual Loafers",
    ProductDetail: "Comfortable loafers for casual outings.",
    ProductPrice: "$90",
    PrevPrice: "$120",
    Discount: "25% OFF",
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
    <div className="min-h-scree n bg-black text-white p-5 pt-10">
      {/* Filter Buttons */}
      <div className="w-full flex items-center justify-center bg-slate-500 rounded-2xl mb-8 mt-20 ">
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

      <div className="pt-10">
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
                className="bg-gradient-to-r from-blue-600 to-blue-400 px-10 py-4 rounded-xl text-white shadow-md w-full sm:w-1/2 text-center transition transform hover:scale-105 hover:shadow-lg"
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
