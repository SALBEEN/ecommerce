// import React from "react";
// import bgImage from "../assets/bg.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
// import Image from "../assets/salbeen.jpg";

// const Home = () => {
//   return (
//     <>
//       <div
//         className="h-screen bg-cover bg-center flex  justify-center items-center "
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="grid lg:grid-cols-3 sm:grid-cols-1 bg-white-100/20 backdrop-blur-sm z-50 justify-between items-center rounded-xl p-10 sm:mt-50 mx-20 sm:gap-20">
//           <div>
//             <img
//               src={Image}
//               alt="Profile image"
//               className="lg:h-80 lg:w-80 h-60 w-60 rounded-full"
//             />
//           </div>
//           <div className="intro text-white p-10 lg:text-4xl text-2xl">
//             <h1 className="italic">Hi!</h1>
//             <h1 className="tracking-wide underline underline-offset-8 italic">
//               Its Salbeen <span className="text-orange-700"> Chapagain </span>
//             </h1>
//           </div>
//           <div className="Socio-link  flex flex-row lg:flex-col text-5xl gap-10 text-gray-300 lg:justify-end justify-center ">
//             <a href="#" className="hover:text-black transition">
//               <FontAwesomeIcon icon={faSquareFacebook} />
//             </a>
//             <a href="#" className="hover:text-black transition">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//             <a href="#" className="hover:text-black transition">
//               <FontAwesomeIcon icon={faSquareXTwitter} />
//             </a>
//             <a href="#" className="hover:text-black transition">
//               <FontAwesomeIcon icon={faSquareInstagram} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import bgImage from "../assets/bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareXTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "../assets/salbeen.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 bg-white-100/20 backdrop-blur-md z-50 justify-between items-center rounded-xl p-6 md:p-10 mx-4 md:mx-10 sm:gap-10 lg:gap-0">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Profile image"
            className="lg:h-80 lg:w-80 h-60 w-60 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Intro Text */}
        <div className="text-white text-center lg:text-left px-4 py-6 lg:px-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light italic mb-2">
            Hi!
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic tracking-wide">
            It's <span className="text-orange-500">Salbeen Chapagain</span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row lg:flex-col justify-center lg:justify-end items-center gap-8 text-4xl sm:text-5xl text-gray-300">
          <a
            href="https://www.facebook.com/salveen.chapagai"
            className="hover:text-blue-600 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a
            href="#"
            className="hover:text-blue-800 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="hover:text-black transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </a>
          <a
            href="#"
            className="hover:text-pink-600 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
