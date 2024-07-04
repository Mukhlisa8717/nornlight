import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
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
import NotFound from "./pages/notFound/NotFound";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import CreateProduct from "./pages/createProduct/CreateProduct";
import ManageProduct from "./pages/manageProduct/ManageProduct";
import CreateCategory from "./pages/createCategory/CreateCategory";
import ManageCategory from "./pages/manageCategory/ManageCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="product/:id" element={<Detail />} />
          <Route path="wishlist" element={<Favourites />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="cart" element={<Basket />} />
          <Route path="about" element={<About />} />
          <Route path="shopping-paymet" element={<ShoppingPaymet />} />
          <Route path="return" element={<Return />} />
          <Route path="garant" element={<Garant />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="login" element={<Login />} />

          <Route path="admin" element={<Auth />}>
            <Route path="" element={<Admin />}>
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="create-category" element={<CreateCategory />} />
              <Route path="manage-category" element={<ManageCategory />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
