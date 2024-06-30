import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/allProducts/AllProducts";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
