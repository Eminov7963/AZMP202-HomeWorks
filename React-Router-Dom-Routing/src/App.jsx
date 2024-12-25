import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Client-pages/Home";
import ClientHeader from "./components/client-header";
import About from "./Pages/Client-pages/About";
import Blog from "./Pages/Client-pages/Blog";
import BlogDetail from "./Pages/Client-pages/Blog Detail";
import Contact from "./Pages/Client-pages/Contact";
import Login from "./Pages/Client-pages/Login";
import Register from "./Pages/Client-pages/Register";
import AdminHeader from "./components/admin-header";
import AddProduct from "./Pages/Admin-pages/Add Product";
import AddUSer from "./Pages/Admin-pages/Add User";
import Dashboard from "./Pages/Admin-pages/Dashboard";
import EditUser from "./Pages/Admin-pages/Edit User";
import EditProduct from "./Pages/Admin-pages/Edit Product";
import Products from "./Pages/Admin-pages/Produtcs";
import Users from "./Pages/Admin-pages/Users";
function App() {
  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<ClientHeader />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogdetail" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminHeader />}>
          <Route index element={<AddProduct />} />
          <Route path="adduser" element={<AddUSer />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="editproduct" element={<EditProduct />} />
          <Route path="edituser" element={<EditUser />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
