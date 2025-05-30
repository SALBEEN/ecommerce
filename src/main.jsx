import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Components/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        {" "}
        {/* ✅ Wrap App in Router */}
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
