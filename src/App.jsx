import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/allProducts/AllProducts";
import Detail from "./pages/detail/Detail";
import Favourites from "./pages/favourites/Favourites";
import BlogPage from "./pages/blogPage/BlogPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Basket from "./pages/basket/Basket";
import About from "./pages/about/About";
import ShoppingPaymet from "./pages/shoppingPaymet/ShoppingPaymet";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/wishlist" element={<Favourites />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopping-paymet" element={<ShoppingPaymet />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
