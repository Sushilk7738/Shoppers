import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Category from "../../../Shopcart/src/components/Category.jsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
  );
}
