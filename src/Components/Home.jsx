import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg";
import featuredImage1 from "../assets/puma1.jpeg";
import featuredImage2 from "../assets/nike1.jpeg";
import featuredImage3 from "../assets/calibre1.jpeg";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const featuredProducts = [
    { id: 1, image: featuredImage1, name: "Puma Shoes" },
    { id: 2, image: featuredImage2, name: "Nike Shoes" },
    { id: 3, image: featuredImage3, name: "Calibre Products" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400">
            Welcome to ShopEase
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300">
            Your one-stop shop for the best products and deals!
          </p>
          <button
            onClick={() => navigate("/product")}
            className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
          >
            Start Shopping
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-4xl font-bold text-center text-blue-400">
          Featured Products
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Check out some of our top picks for you!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featuredProducts.map((product) => (
            <div key={product.id} className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <button
                  onClick={() => navigate("/product")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-black text-center">
        <h2 className="text-4xl font-bold text-blue-400">
          What Our Customers Say
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              "ShopEase has the best deals! I found everything I needed at great
              prices."
            </p>
            <h3 className="mt-4 text-blue-400 font-bold">- Sita Mam</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              "Amazing customer service and fast delivery. Highly recommend!"
            </p>
            <h3 className="mt-4 text-blue-400 font-bold">- Salbeen chaps</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              "The quality of the products is top-notch. I will definitely shop
              here again."
            </p>
            <h3 className="mt-4 text-blue-400 font-bold">- Samikshya poudel</h3>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="py-16 bg-blue-500 text-center">
        <h2 className="text-4xl font-bold text-white">Stay Updated</h2>
        <p className="text-white mt-2">
          Subscribe to our newsletter for the latest deals and updates.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-l-lg w-64 md:w-96 text-black border border-white"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-r-lg hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
